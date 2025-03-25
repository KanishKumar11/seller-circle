import { connectDB } from "@/app/lib/db.js";
import authModels from "@/app/lib/models/auth.models.js";
import { validateToken } from "@/app/middleware/validate.middleware.js";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { Client, Storage, ID } from "appwrite";  // Ensure Appwrite SDK is imported

export const POST = async (req) => {
  try {
    await connectDB();

        const data = await req.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const authType = data.get("authType");
    const file = data.get("file");

    // Parse JSON body from the request
    // const body = await req.json();
    // const { name, email, password, file } = body;

    if (!file) {
      return NextResponse.json(
        { error: "Please upload a file" },
        { status: 400 }
      );
    }

    const adminData = await authModels.findOne({ email });
    if (adminData) {
      return NextResponse.json(
        { error: "Admin already exists" },
        { status: 400 }
      );
    }

    // Configure Appwrite client
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_PROJECT_API) // Appwrite endpoint
      .setProject(process.env.APPWRITE_PROJECT_ID); // Appwrite project ID

    client.headers = {
      ...client.headers,
      "X-Appwrite-Key": process.env.API_KEY, // API key for authentication
    };

    const storage = new Storage(client);

    // Upload file to Appwrite storage
    const response = await storage.createFile(
      process.env.Bucket_ID, // Appwrite bucket ID
      ID.unique(), // Generate unique file ID
      file
    );
    const fileUrl = `${process.env.APPWRITE_PROJECT_API}/storage/buckets/${process.env.Bucket_ID}/files/${response.$id}/view?project=${process.env.APPWRITE_PROJECT_ID}`;

    const hashedPassword = await bcrypt.hash(password, 10);
    const authOption = new authModels({
      name: name,
      email: email,
      password: hashedPassword,
      authType: "admin",
      filename: file.name,
      contentType: file.type,
      imageBase64: fileUrl,
    });

    await authOption.save();

    return NextResponse.json(authOption, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};


export const GET = async (req) => {
  try {
    await connectDB();

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      const adminPayload = validateToken(token);
      req.user = adminPayload;
      const { id, role } = req.user;
      const adminData = await authModels.findById(id);

      if (role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Something Went Wrong", details: error.message },
        { status: 500 }
      );
    }

    const admin = await authModels.find({ authType: "admin" }).select("-token"); // Exclude passwords
    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

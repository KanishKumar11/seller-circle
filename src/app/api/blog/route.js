import { connectDB } from "@/app/lib/db.js";
import authModels from "@/app/lib/models/auth.models";
import { BlogModel } from "@/app/lib/models/blog.models.js";
import { validateToken } from "@/app/middleware/validate.middleware.js";
// import ResponseUtil from "@/app/utility/response.utility.js"
import { Client, Storage, ID } from "appwrite"; // Ensure Appwrite SDK is imported
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    // Get Authorization token
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      // Validate token and get user payload
      const adminPayload = validateToken(token);
      if (!adminPayload) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }

      req.user = adminPayload;
      const { id, role } = req.user;

      // Fetch admin data
      const adminData = await authModels.findById(id);
      if (!adminData || adminData.token === null || role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Parse request form data
      const data = await req.formData();
      const title = data.get("title");
      const content = data.get("content");
      const slug = data.get("slug");
      const file = data.get("file");
      const category = data.get("category");
      const metaDescription = data.get("metaDescription");
      const blogType = data.get("blogType");
      const position = data.get("position");

      if (!file) {
        return NextResponse.json(
          { error: "Please upload a file" },
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

      const newBlog = new BlogModel({
        title,
        content,
        slug,
        filename: file.name,
        contentType: file.type,
        imageBase64: fileUrl, // Save the constructed URL
        authID: id,
        category,
        metaDescription,
        blogType: blogType || "simple",
        position: position || "right",
      });

      await newBlog.save();
      return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
      console.error("Internal Error:", error); // Log for debugging
      return NextResponse.json(
        { error: "Something Went Wrong", details: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Connection Error:", error); // Log for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDB();

    const getData = await BlogModel.find().populate(
      "authID",
      "-token -email -password"
    );
    // console.log(getData, "blog resposnse");
    if (!getData || getData.length === 0) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    // Calculate the size of the `getData` object
    const getDataSize = Buffer.byteLength(JSON.stringify(getData));
    console.log(`Size of the blog data: ${getDataSize} bytes`);

    return NextResponse.json({ success: true, data: getData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

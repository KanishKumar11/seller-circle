import { connectDB } from "@/app/lib/db";
import authModels from "@/app/lib/models/auth.models.js";
import { BlogModel } from "@/app/lib/models/blog.models.js";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Client, Storage, ID } from "appwrite";  // Ensure Appwrite SDK is imported

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params; // Extract ID from route params
  try {
    const data = await req.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const file = data.get("file");

    // const { data, name, password, file } = req.body;

    // Dynamically construct the fields to update
    const updateFields = {};
    const authData = await authModels.findById(id);

    if (name !== null) updateFields.name = name;

    if (password !== null) {
      const isValidPassword = await bcrypt.compare(process.env.AdminPassword, authData.password);
      if (isValidPassword) {
        return NextResponse.json(
          { success: false, error: "You are not authorized to update this Admin" },
          { status: 401 }
        );
      }else{
        const hashPassword = await bcrypt.hash(password, 10)
        updateFields.password = hashPassword
      }
    };
    // if (password !== null) updateFields.password = password;
    if (email !== null) {
      if (authData.email != process.env.AdminEmail) {
        updateFields.email = email;
      }
    } else {
      return NextResponse.json(
        { success: false, error: "You are not authorized to update this Admin" },
        { status: 401 }
      );
    }
    // if (slug !== null) updateFields.slug = slug;

    if (file) {

      // Configure Appwrite client
      const client = new Client()
        .setEndpoint(process.env.APPWRITE_PROJECT_API) // Appwrite endpoint
        .setProject(process.env.APPWRITE_PROJECT_ID); // Appwrite project ID

      client.headers = {
        ...client.headers,
        'X-Appwrite-Key': process.env.API_KEY, // API key for authentication
      };

      const storage = new Storage(client);

      // Upload file to Appwrite storage
      const response = await storage.createFile(
        process.env.Bucket_ID, // Appwrite bucket ID
        ID.unique(), // Generate unique file ID
        file
      );
      const fileUrl = `${process.env.APPWRITE_PROJECT_API}/storage/buckets/${process.env.Bucket_ID}/files/${response.$id}/view?project=${process.env.APPWRITE_PROJECT_ID}`;



      updateFields.filename = file.name;
      updateFields.contentType = file.type;
      updateFields.imageBase64 = fileUrl;
    }

    const updatedAdmin = await authModels.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    if (!updatedAdmin) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Blog updated successfully",
        data: updatedAdmin,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { id } = await params; // Extract ID from route params
    const blog = await authModels.findById(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Blog fetched successfully", data: [blog] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params; // Extract ID from route params
  try {
    const authData = await authModels.findById(id);
    if (authData.email === process.env.AdminEmail) {
      return NextResponse.json(
        { success: false, error: "You are not authorized to delete this Admin" },
        { status: 401 }
      );
    }
    const deletedBlog = await authModels.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

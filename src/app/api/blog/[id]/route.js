

// File: app/api/blog/[id]/route.js
import { connectDB } from "@/app/lib/db";
import { BlogModel } from "@/app/lib/models/blog.models.js";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Client, Storage, ID } from "appwrite";
export async function GET(request, { params }) {
  await connectDB();
  const { id } = await params;

  // console.log(id, "idididiidid")
  try {
    const blog = await BlogModel.findById(id).populate(
      "authID",
      "-token -email -password"
    );
    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 404,
          error: "Blog not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Blog fetched successfully",
        data: blog,
        statusCode: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        error: "Failed To Get Blog",
      },
      { status: 500 }
    );
  }
}


export const PUT = async (req, { params }) => {
  await connectDB();
  const { id: blogId } = await params; 
  try {


    const blog = await BlogModel.findById(blogId);
    
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const data = await req.formData();

    
    const title = data.get("title");
    const content = data.get("content");
    const slug = data.get("slug");
    const file = data.get("file");
    const category = data.get("category");
    const blogType = data.get("blogType");
    // const position = data.get("FormPosition");
    const position = data.get("position");

    
    const updatedFields = {};

    if (title) updatedFields.title = title;
    if (content) updatedFields.content = content;
    if (slug) updatedFields.slug = slug;
    if (category) updatedFields.category = category;
    if (blogType) updatedFields.blogType = blogType;
    if (position) updatedFields.position = position;

   
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
      
      
      updatedFields.filename = file.name;
      updatedFields.contentType = file.type;
      updatedFields.imageBase64 = fileUrl; 
    }

  
    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, updatedFields, {
      new: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ error: "Failed to update blog" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Blog updated successfully", data: updatedBlog }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something Went Wrong", details: error.message }, { status: 500 });
  }
};


export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = await params;

  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 404,
          error: "Blog not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successfully",
        statusCode: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        error: "Failed To Delete Blog",
      },
      { status: 500 }
    );
  }
}

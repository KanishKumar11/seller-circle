import { connectDB } from "@/app/lib/db";
import CategoryTable from "@/app/lib/models/category.models.js";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    try {
      await connectDB();

       const authHeader = req.headers.get("authorization");
          const token = authHeader?.split(" ")[1];
          // console.log('Authorization Header:', authHeader); // Debugging
      
          if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
          }


          const data = await req.formData();
          const catName = data.get("catName");

            if (!catName) {
                return NextResponse.json(
                    { error: "Please enter a category name" },
                    { status: 400 })
            }
            const Category = await CategoryTable.findOne({catName });
            // console.log(Category);
            
            if (Category) {
                return NextResponse.json(
                    { error: "Category already exists" },
                    { status: 400 }
                );
            }
  
            const newCategory = new CategoryTable({
                catName,
            })
            const saveCategory = await newCategory.save();
     
  
      return NextResponse.json({ success: true, data: saveCategory }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };
  

export const GET = async () => {
  try {
    await connectDB();

    const getData = await CategoryTable.find()

    if (!getData) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: getData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

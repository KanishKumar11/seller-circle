import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  imageBase64: { type: String, required: true },
  authID : { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
  blogType : { type: String, enum : ["simple", "lead"], default: "simple" },
  category:{type: String, required: true},
  position : { type: String, enum : ["left", "right"], default: "right" },
  metaDescription: { type: String, required: false, maxlength: 160 }
  
},{timestamps: true});

export const BlogModel = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

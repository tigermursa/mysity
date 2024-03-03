import mongoose, { Schema } from "mongoose";

//schema for the websites
const siteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const SiteModel = mongoose.model.Site || mongoose.model("Site", siteSchema);

export default SiteModel;

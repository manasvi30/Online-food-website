import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://rebecca:reccashah@cluster0.12ghljs.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}
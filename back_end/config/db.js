import mongoose from "mongoose";


export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://hassnajinni:Passw0rd@cluster0.v2sno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
        ()=>{console.log("DB Connected Successfully")}
    )
}

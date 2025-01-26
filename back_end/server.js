import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//DB CONNECTION
connectDB();

//API END POINT
app.use("/api/food",foodRouter)

//---enpoint for images
app.use("/image",express.static("uploads"))

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://hassnajinni:<db_password>@cluster0.v2sno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
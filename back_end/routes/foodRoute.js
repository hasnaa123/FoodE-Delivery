import express from "express"
import foodModel from "../models/FoodModel.js"
import multer from "multer"
import { addFood } from "../controllers/foodControllers.js";

//Create a rout
const foodRouter = express.Router();


//Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
      return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",addFood)














export default foodRouter;
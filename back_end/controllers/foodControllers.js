import foodModel from "../models/FoodModel.js";

import fs from 'fs'

//add food item

const addFood = async(req,res)=>{
     
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save()
        res.json({success:true,message:"food added"})
    }
    catch(err){
       console.log(err)
       res.json({success:false,message:"ERROR"})
    }

}


//food list

const listFood = async(req,res)=>{
    try{
       const foods = await foodModel.find({});
       res.json({success:true,data:foods})

    }
    catch(err){
      console.log(err)
      res.json({successs:false,message:'error'})
    }
}


//Remove FoodItem
const deleteFood = async(req,res)=>{
    const { id } = req.params;
    try {
        // Find the record by ID
        const foodrow = await foodModel.findById(id);
        if (!foodrow) {
          return res.status(404).json({ message: "Record not found" });
        }
    
        // Get the image path
        const imagePath = `uploads/${foodrow.image}`;
    
        // Delete the image file
        fs.unlink(imagePath, async (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).json({ message: "Failed to delete image" });
          }
    
          // Delete the record from the database
          await foodModel.findByIdAndDelete(id);
          res.status(200).json({ message: "Record and image deleted successfully" });
        });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "An error occurred" });
      }

    }

export {addFood,listFood,deleteFood}
const express= require('express');
const router= express.Router();
const mongoose= require('mongoose');
const Post= require("../models/Post");
const Blog= require("../models/Blog")
const sendMail= require("../controller/sendmail")
const isUser= require("../middlewares/userAuthentication")

router.get("/get",async(req,res)=>{
    try{
            console.log("hello")
            res.status(200).send("Hello")
    }catch(err){
        console.log(err);
    }
})

router.post("/create",async(req,res)=>{
    const {title,imageUrl,description} = req.body;
    try{

        const Poster = new Post({
            title,
            description,
            imageUrl
          });
      
          // Save the recipe to the database
           await Poster.save();
      
          res.status(201).json(Poster);

    }catch(err){
        console.log(err);
        res.status(400).json({message:"Something went wrong"})
    }
})

router.get("/getall",async(req,res)=>{
    try{
            const blogs = await Post.find();
            res.status(200).json({data:blogs})
    }catch(err){        
        console.log(err);
    }
})
router.get('/getallpagewise', isUser,async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10; // Number of items per page
    const skip = (page - 1) * limit;
  
    try {
      const posters = await Post.find().skip(skip).limit(limit);
      res.json(posters);
    } catch (error) {
      console.error('Error fetching posters:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  //username - otis8@ethereal.email
//password- XF7QQTszmB6nxe86Pu
module.exports=router;
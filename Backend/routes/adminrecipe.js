const express = require('express');
const router = express.Router();
var fetchadmin = require('../middleware/fetchadmin');
const Recipe = require("../models/Recipe");
const { body, validationResult } = require('express-validator');
const multer  = require('multer')
const Admin = require("../models/Admin");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/RecipeImages')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now()+'_'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  //fetch all recipes created by user for approval by admin

  router.get("/fetchallrecipes", fetchadmin, async (req, res) => {
    console.log(req.admin)
    let admin1 = await Admin.findById(req.admin.id);
   
  if(admin1){
      try {
          const recipes = await Recipe.find()
          res.json(recipes)
      } catch (error) {
          console.log(error.message)
          res.status(500).send("some error are occurred")
      }
   
       }
       else{
        return res.status(404).send("not found");
       }


})

// ROUTE 3 update recipe and add approval message to user recipe so Other user can see this particular recipe login required
//also catagory add by admin By this api
router.put("/updaterecipe/:id", fetchadmin, async (req, res) => {
    console.log(req.body)
    const { recipeimage, title, description, cooktime, serves,aprovestatus,catogory } = req.body;
    try {


        const newRecipe = {};
        if (recipeimage) {
            newRecipe.recipeimage = recipeimage;
        }
        if (title) {
            newRecipe.title = title;
        }
        if (description) {
            newRecipe.description = description;
        }
        if (cooktime) {
            newRecipe.cooktime = cooktime;
        } if (serves) {
            newRecipe.serves = serves;
        }
        if(aprovestatus){
            newRecipe.aprovestatus=aprovestatus;
        }
        if(!aprovestatus){
           newRecipe.aprovestatus=aprovestatus;
        }
        if(catogory){
            newRecipe.catogory=catogory
        }
        //     find the recipes
        //  to be 

        let recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send("not found");
        }
        let admin1 = await Admin.findById(req.admin.id);
        if(!admin1){
            return res.status(404).send("not found");
        }
        recipe = await Recipe.findByIdAndUpdate(req.params.id, { $set: newRecipe }, { new: true })
        res.json({ recipe })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }
})
router.delete("/deleterecipe/:id", fetchadmin, async (req, res) => {


    //     find the recipes
    //  to be deleted
    try {
        let recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send("not found");
        }
        // Allow deletion only by admin
        let admin1 = await Admin.findById(req.admin.id);
        if(!admin1){
            return res.status(404).send("not found");
        }
        recipe = await Recipe.findByIdAndDelete(req.params.id)
        res.json({ "success": "Recipes has been deleted" })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }

})



module.exports = router;
const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Recipe = require("../models/Recipe");
const { body, validationResult } = require('express-validator');
const multer = require('multer')
const Favourite = require("../models/Favourite");
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/RecipeImages')
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })


//require file for recipe parser
const fs = require('fs');
// import * as  from "";
const RecipesParser = require('recipes-parser').default;
// import RecipesParser from 'recipes-parser'
const units = require('recipes-parser/lib/nlp/en/units.json');

const globalUnit = require('recipes-parser/lib/nlp/en/global_unit.json');
const rules = fs.readFileSync(
    path.join(__dirname, `../node_modules/recipes-parser/lib/nlp/en/en/rules.pegjs`),
    {
        encoding: "utf8",
    }
);

// ROUTE 1 get all the recipes from db get request 
router.get("/fetchallrecipes", fetchuser, async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id })
        res.json(recipes)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }

})
// ROUTE 2 add recipes in db
router.post("/addrecipes", fetchuser, upload.single('recipeimage'), [
    // body('recipeimage', 'Enter a valid Name').isLength({ min: 3 }),
    body('title1', 'Enter a valid title').isLength({ min: 4 }),
    body('description1', 'Enter a valid description').isLength({ min: 5 }),
    // body('cooktime', 'Enter a valid time').isLength({ min: 5 }),
    // body('serves', 'Enter a valid value').isLength( {min:4}),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let success = false;
    const recipeimage = (req.file) ? req.file.filename : null;
    //    const recipeimage=await req.body
    const { title1, description1, cooktime, serves, steps, ingridentlist } = req.body;
    const createRecipe = async () => {
        try {
            const title = JSON.parse(title1);
            const description = JSON.parse(description1);

            const steps1 = JSON.parse(steps);
            const ingridentarray = JSON.parse(ingridentlist);
            const cooktimed = JSON.parse(cooktime);
            const serves1 = JSON.parse(serves);
            
            const ingridentarrayname=ingridentarray.map(function(val,index){
                return val.ingridentName;
            })
            
            console.log(ingridentarray[0].ingridentName);
            console.log(ingridentarrayname);
            // for recipe parser
         
            const parser =  new RecipesParser(rules, units, globalUnit);
            // const parseingrident=new Array();
            var parseingrident = ingridentarrayname.map(function(val, index){
                // const element = ingridentarray[i];
                const results = parser.getIngredientsFromText(
                    [val],
                    true
                );
                    
                // parseingrident[i]=results[0].result;
                return results[0].result;
            })
              
            // for (let i = 0; i < ingridentarray.length; i++) {
            //     const element = ingridentarray[i];
            //     const results = parser.getIngredientsFromText(
            //         [element],
            //         true
            //     );
                    
            //     parseingrident[i]=results[0].result;
            //     // console.log(results[0].result);
            // }
            console.log(parseingrident);
            const createRecipe = new Recipe(
                {

                    recipeimage, title, description, cooktimed, serves1, user: req.user.id, steps1, ingridentarray,parseingrident

                }
            )
            const savedrecipes = await createRecipe.save()
            success = true
            res.json({ success, savedrecipes });
        }
        catch (error) {
            console.log(error.message)
            res.status(500).send("some error are occurred")
        }
    }
    createRecipe();
})


//Route For Favourite Recipe
router.put("/updatefavourite", fetchuser, (req, res) => {

    var favouriterecipe1 = { "recipeuser": req.body.recipeuser, "recipe": req.body.recipe }



    Favourite.updateOne({ user: req.user.id }, { $push: { favouriterecipe: favouriterecipe1 } }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });


})
//Route for get favouriterecipe
router.get("/getfavourite", fetchuser, async (req, res) => {
    try {
        var favourite = await Favourite.find({ user: req.user.id })

        res.json(favourite)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }

})

// ROUTE 3 update login required
router.put("/updaterecipe/:id", fetchuser, async (req, res) => {
    const { recipeimage, title, description, cooktime, serves } = req.body;
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
        //     find the recipes
        //  to be 

        let recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send("not found");
        }
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }
        recipe = await Recipe.findByIdAndUpdate(req.params.id, { $set: newRecipe }, { new: true })
        res.json({ recipe })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }
})

// delete recipes from server login required route4 
router.delete("/deleterecipe/:id", fetchuser, async (req, res) => {


    //     find the recipes
    //  to be deleted
    try {
        let recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send("not found");
        }
        // Allow deletion only user owns this note
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }
        recipe = await Recipe.findByIdAndDelete(req.params.id)
        res.json({ "success": "Recipes has been deleted" })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }

})

//delete Favourite Recipe
router.put("/deletefrecipe", fetchuser, async (req, res) => {


    //     find the recipes
    //  to be deleted
    var favouriterecipe1 = { "recipeuser": req.body.recipeuser, "recipe": req.body.recipe }



    Favourite.updateOne({ user: req.user.id }, { $pull: { favouriterecipe: favouriterecipe1 } }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });

})

//get particular event by id
router.get("/:id", async (req, res) => {
    try {
        const ev = await Recipe.findById(req.params.id);
        res.status(200).json(ev)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
const Recipe = require("../models/Recipe");
const express = require('express');
const router = express.Router();
router.get("/fetchrecipes", async (req, res) => {
    try {
        const recipes = await Recipe.find({aprovestatus:true})
        res.json(recipes)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }

})
router.get("/searchrecipes", async (req, res,next) => {
    try {
        const searchedField=req.query.title;
        const recipes = await Recipe.find({title:{$regex: searchedField, $options: 'i'}})
        res.json(recipes)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }

})
module.exports = router;
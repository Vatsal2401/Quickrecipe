const mongoose =require("mongoose")
const { Schema } = mongoose;

const RecipesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    recipeimage:
    {
        type: String,
        required: true
    },
    title:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    cooktimed:
    {
        type: String,
        required: true
    },
    serves1:
    {
        type: Number,
        required: true
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    aprovestatus:{
        type:Boolean,
        default:false
    },
    catogory:{
    type:String,
    default:""
    },
    steps1:Schema.Types.Mixed,
    ingridentarray:Schema.Types.Mixed,
    ingridentparser:Schema.Types.Mixed
    
});
Recipe=mongoose.model('Recipe',RecipesSchema)
module.exports=Recipe;
// const createRecipe = async ()=>{
//     try{
// const createRecipe =new Recipe(
//     {
//         recipeimage:"vasal"
//         ,
//         title:"samosa",
       
//         description:"this good food "
//        ,
//         cooktime:3
//         ,
//         serves:5
      
        
//     }
// )
// const result = await createRecipe.save()
// console.log(result)}
// catch(error){

// }
// }
// createRecipe();
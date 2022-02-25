const mongoose =require("mongoose")
const { Schema } = mongoose;

const FavouriteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    favouriterecipe: [
        {
          recipeuser:{ type: mongoose.Schema.Types.ObjectId,
            ref: 'recipeuser'},
          recipe:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'recipe'
            }
        }
      ]
});
Favourite=mongoose.model('Favourite',FavouriteSchema)
module.exports=Favourite;
// const createFavourite = async ()=>{
//     try{
// const createFavourite =new Favourite(
//     {
//         Favouriteimage:"vasal"
//         ,
//         title:"samosa",
       
//         description:"this good food "
//        ,
//         cooktime:3
//         ,
//         serves:5
      
        
//     }
// )
// const result = await createFavourite.save()
// console.log(result)}
// catch(error){

// }
// }
// createFavourite();
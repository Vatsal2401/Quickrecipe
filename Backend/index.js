const connectToMongo = require('./db');  
var cors = require('cors')

const express = require('express') 
connectToMongo();
const app = express()
const port = 3005
app.use(cors())
app.use(express.json())

app.use("/RecipeImage",express.static('./public/RecipeImages'))
app.post("/RecipeImage",(req,res)=>{
  res.json({
    success:1,
    recipeimg_url:`http://localhost:3005/RecipeImage/${req.body.img}`
  })
})
app.use("/api/auth",require("./routes/auth"))
app.use("/api/adminauth",require("./routes/adminauth"))
app.use("/api/recipes",require("./routes/recipes"))
app.use("/api/adminrecipe",require("./routes/adminrecipe"))
app.use("/api/homerecipes",require("./routes/homerecipes"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

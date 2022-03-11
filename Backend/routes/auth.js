const express = require('express');
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const { restart } = require('nodemon');
const bcrypt = require('bcryptjs');
const JWT_SECRET = "vatsalpatelapp";
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const Favourite = require("../models/Favourite");

// create user 


router.post("/createuser", [
  body('name', 'Enter a valid Name').isLength({ min: 3 }),
  body('username', 'Enter a valid Username').isLength({ min: 4 }),
  body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success,errors: errors.array() });
  }
  try {

    //  is user is present with same email id below function return true
    let user = await User.findOne({ username: req.body.username })
    if (user) {
      return res.status(400).json({ success,error: "sorry user with this username already exists" })
    }
    // create a new user
    const salt = await bcrypt.genSalt(10);

    secPassword = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      username: req.body.username,
      password: secPassword

    })
    const createFavourite = async () => {
      try {
          const createFavourite = new Favourite(
              {

                  user:user._id

              }
          )
          const savedrecipes = await createFavourite.save()
          success=true
          // res.json({success,savedrecipes});
      }
      catch (error) {
          console.log(error.message)
          // res.status(500).send("some error are occurred")
      }
  }
  createFavourite();

    // .then(user => res.json(user))
    //   .catch(err => {
    //     console.log(err)
    //     res.json({ error: "Enter a unique value for email.", message: err.message })
    //   });
    data = {
      user: {
        id: user._id
      }
    }

    const AUTHTOKEN = jwt.sign(data, JWT_SECRET);
    success=true
    res.json({success,AUTHTOKEN});
    
    // res.json("message:register succesfulyy")
  }
  //  catch error while creating user
  catch (error) {
    console.log(error.message)
    res.status(500).send("some error are occurred")
  }
})


// login for user 
router.post('/login', [
  body('username', 'Enter a valid username').exists(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });

    }
   console.log(user);
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


})
// fetching user by jwt token 

router.get('/getuser', fetchuser, async (req, res) => {

  try {
   const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router;
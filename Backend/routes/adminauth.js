const express = require('express');
const router = express.Router();
const Admin = require("../models/Admin")
const { body, validationResult } = require('express-validator');
const { restart } = require('nodemon');
const bcrypt = require('bcryptjs');
const JWT_SECRET = "vatsalpatelapp";
var jwt = require('jsonwebtoken');
var fetchadmin = require('../middleware/fetchadmin');


//create admin
router.post("/createadmin", [
    // body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('adminname', 'Enter a valid adminname').isLength({ min: 4 }),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
  ], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try {
  
      //  is admin is present with same email id below function return true
      let admin = await Admin.findOne({ adminname: req.body.adminname })
      if (admin) {
        return res.status(400).json({ success,error: "sorry admin with this adminname already exists" })
      }
      // create a new admin
      const salt = await bcrypt.genSalt(10);
  
      secPassword = await bcrypt.hash(req.body.password, salt);
      admin = await Admin.create({
        // name: req.body.name,
        adminname: req.body.adminname,
        password: secPassword
  
      })
      data = {
        admin: {
          id: admin.id
        }
      }
  
      const AUTHTOKEN = jwt.sign(data, JWT_SECRET);
      success=true
      res.json({success,AUTHTOKEN});
      
      // res.json("message:register succesfulyy")
    }
    //  catch error while creating admin
    catch (error) {
      console.log(error.message)
      res.status(500).send("some error are occurred")
    }
  })

  // login for admin
router.post('/adminlogin', [
    body('adminname', 'Enter a valid adminname').exists(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { adminname, password } = req.body;
    try {
      let admin = await Admin.findOne({ adminname });
      if (!admin) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
  
      }
  
      const data = {
        admin:{
          id: admin.id
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

  // fetching admin by jwt token 

router.post('/getadmin', fetchadmin, async (req, res) => {

    try {
      adminId = req.admin.id;
      const admin = await Admin.findById(adminId).select("-password")
      res.send(admin)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  module.exports = router;
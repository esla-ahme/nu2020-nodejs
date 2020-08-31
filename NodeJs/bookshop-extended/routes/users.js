const express = require('express');
const User = require('../models/User');

const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   console.log("hello to users");
   res.send("user")
});

module.exports = router;
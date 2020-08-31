const express = require('express');
const Category = require('../models/Category');

const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   console.log("hello to cats");
   res.send("cats")
});

module.exports = router;
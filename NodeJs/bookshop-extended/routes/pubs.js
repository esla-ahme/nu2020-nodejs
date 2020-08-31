const express = require('express');
const Publisher = require('../models/Publisher');

const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   console.log("hello to pubs");
   res.send("pubs")
});

module.exports = router;
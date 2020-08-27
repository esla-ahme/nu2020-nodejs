const express = require('express');
const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   console.log("hello to cats");
   res.send("cats")
});

module.exports = router;
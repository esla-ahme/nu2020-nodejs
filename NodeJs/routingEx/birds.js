const express = require('express');
const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   console.log("hello to birds");
   res.send("birds")
});

module.exports = router;
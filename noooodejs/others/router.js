const express = require('express');
const router = express.Router();

// Define a route using router.get()

router.get('/',(req,res,{userId})=>{
    res.send("hello",userId.name)
})






module.exports = router;
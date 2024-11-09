const express=require('express');
const createUser = require('../controllers/createUser');
const getAllUsers = require('../controllers/getallUSer');
const router=express.Router();



router.post("/create",createUser);
router.get("/get",getAllUsers);

module.exports=router;
const express=require("express")

const songrouter=express.Router()
const {savedata, getdata,editrating}=require("../controllers/songcontroller")

const path=require("path")
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:path.join(__dirname,"uploads")});
songrouter.post("/save",multipartMiddleware,savedata)
songrouter.get("/getdata",getdata)
songrouter.put("/editrating",editrating)
module.exports= songrouter

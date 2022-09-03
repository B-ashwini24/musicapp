const express=require("express")

const artistrouter=express.Router()
const {savedata, getdata,getSongs,getall,deleteData}=require("../controllers/artistcontroller")
artistrouter.post("/save",savedata)
artistrouter.get("/getdata",getdata)

artistrouter.get("/getall",getall)
artistrouter.get("/getsongs",getSongs)
artistrouter.delete("/deletedata",deleteData)

module.exports= artistrouter




const Song=require("../models/songs")

var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dnazgsswk', 
    api_key: '971671939656885', 
    api_secret: 'GLZCLi3CcEqvEpQur9sEGs0pgx4',
    secure: true
  });
const savedata=(req,res)=>{
    console.log("inside")
    console.log(req.files.artwork)
    let splitarray=req.files.artwork.path.split("\\")
   console.log(splitarray)
    var imageFile = req.files.artwork.path;
    cloudinary.uploader.upload(imageFile, function(error, result)
        {
            console.log(result)
            if(error)
            {
                console.log(error)
            }
            else{
            const song=new Song({
                artwork:result.url,
                //artwork:splitarray[splitarray.length-1],
                dor:req.body.dor,
                Aname:req.body.Aname,
                song:req.body.song,
                rating:req.body.rating
          
            })
            song.save().then(data=>{
                res.send({
                    message:"data saved",
                    data:data
                    
                })
            })
         
        
        }
    })
}
const editrating=(req,res)=>{
    const data=req.body
    console.log(data)
    Song.updateOne({_id:data._id},{$set:{rating:data.rating}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
const getdata=(req,res)=>{
    Song.find().sort({rating:-1}).then(result=>{
        res.send({
            
            data:result
        })
    })
}

module.exports={
    savedata,
    getdata,editrating
    
}




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
    
                //artwork:splitarray[splitarray.length-1],
                let artwork;
               const dor=req.body.dor;
               const Aname=req.body.Aname;
                const song=req.body.song;
               const rating=req.body.rating;
               const aid=req.body.aid;

               try {
                cloudinary.uploader.upload(imageFile, function(error, result)
                {
                    console.log(result);
                    artwork:result.url;
                    if(error)
                    {
                        console.log(error)
                    }
                    else{

                            if(song){
                                const jane = Song.create({ Aname: Aname, dor: dor, rating:rating,song:song,aid:aid,artwork:result.url });
                                console.log("Jane's auto-generated ID:", jane.id);
                                res.json({
                                    message:"Success",
                                    id:jane.id
                                })
                    
                            }
                            else{
                                res.send("Problem with db connection");
                            }
                    
                    }
                })
                
            } catch (error) {
        
                console.log(error);
                
            }

   
        
        }
  
const editrating=async(req,res)=>{

    const id=req.body.id;

    const rating=req.body.rating;
  
    try {
      // Change everyone without a last name to "Doe"
await Song.update({ rating: rating }, {
    where: {
      id: id
    }
  });
        res.json({
            message:"Success",
         
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }
}
const getdata=async(req,res)=>{
    try {
        const songs = await Song.findAll();
        res.json({
            message:"Success",
            data:songs
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }
}

module.exports={
    savedata,
    getdata,editrating
    
}

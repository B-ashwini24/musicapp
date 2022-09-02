


const Artist=require("../models/artist")

//const Song=require("../models/songs")

const savedata=async(req,res)=>{
  
   const Aname= req.body.Aname;
   const dob= req.body.dob;
    const bio= req.body.bio;

    try {
        if(Artist){
            const jane = await Artist.create({ Aname: Aname, dob: dob, bio:bio });
         //   console.log("Jane's auto-generated ID:", jane.id);
            res.json({
                message:"Success",
              //  id:jane.id
            })

        }
        else{
            res.send("Problem with db connection");
        }
 
    
        
    } catch (error) {

        console.log(error);
        
    }
}
const Song=require("../models/artist")
const getdata=async(req,res)=>{
    // console.log((await Artist.findAll({
      
    //     include: {
    //       model: Song,
    //       as: 'leader'
    //     }
    //   })).toJSON());
    try {
      
        const artists = await Artist.findAll();
        console.log(artists)
        res.json({
            message:"Success",
            data:artists
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }
}
const getall=(req,res)=>{
//     Song.aggregate([
//         { 
//             $lookup:
//             {
//                from: 'Artist',
//                localField: 'Aname',
//                foreignField: 'Aname',
//                as: 'address'
//             }
//         }
//     ])
 }
 const getSongs=(req,res)=>{
//     console.log("inside songs",req.params.Aname)
    
//     Song.find({Aname:req.params.Aname}).then(result=>{
//         console.log("Songs",result)
       
//         res.send({
            
//             data:result
//         })
//     })
 }

module.exports={
    savedata,
    getdata,getSongs,getall
    
}

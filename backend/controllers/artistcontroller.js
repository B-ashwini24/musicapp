


const { Collection } = require("mongoose")
const Artist=require("../models/artist")

const Artistsongs=require("../models/artistsongs")

const Song=require("../models/songs")

const savedata=(req,res)=>{
    console.log("inside")
    console.log(req.files)
  
            const artist=new Artist({
                Aname:req.body.Aname,
                dob:req.body.dob,
                bio:req.body.bio
          
            })
            artist.save().then(data=>{
                res.send({
                    message:"data saved",
                    data:data
                    
                })
            })
         
        }
 

const getdata=(req,res)=>{
    Artist.find().then(result=>{
        console.log(result)
       
        res.send({
            
            data:result
        })
    })
}

const getall=async(req,res)=>{

    const a=await Artistsongs.deleteMany().then(result=>{
        console.log("dlee")
        res.send({
            message:"deleted"
        })
    })
    let arr=[];
    let obj={
        Aname:"",
       
        song:""
    }
  const b= await Artist.find().then(result=>{
       // console.log(result)
        result.map(ele=>{
            console.log(ele.Aname)
           Song.find({Aname:ele.Aname}).then(result1=>{
               // console.log(result1)
                let str=""
                let artist=ele.Aname;
              //  let bdate=ele.dob;
                result1.map(ele1=>{
                 
                    if(ele1.song)
                    {
                        str+=ele1.song
                        str+=","
                    }
                   
                })
               
                    obj.Aname=artist,
                    obj.dob=ele.dob,
                    obj.song=str
              
                  console.log(obj)
              
                Artistsongs.insertMany(obj).then(result=>{
                     console.log("inserted")
                 })
            })
           
        })
      
       
       
    })
  
  
}

const deleteData=(req,res)=>{
    console.log("j")
    Artistsongs.deleteMany().then(result=>{
        console.log("dlee")
        res.send({
            message:"deleted"
        })
    })

}
   
const getSongs=(req,res)=>{
    //console.log("inside songs",req.params.Aname)
    
    Artistsongs.find().then(result=>{
        console.log("Songs",result)
       
        res.send({
            
            data:result
        })
    })
}

module.exports={
    savedata,
    getdata,getSongs,getall,deleteData
    
}

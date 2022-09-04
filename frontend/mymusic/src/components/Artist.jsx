import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Stack } from '@mui/material';

const Artist = () => {
 const [info,setInfo]=useState({
    Aname:"",
    dob:"",
    bio:""

})
  const handleChange = (event) => {
    setInfo({...info,[event.target.name]:event.target.value})
   
  };
  const clickhander=()=>{
    console.log(info)
    if(info.Aname==="" )
    {
            alert("All fields required")
   }
    else
    {
          axios.post("http://localhost:9003/artist/save",info).then(res=>{
            console.log("data added")
          }).catch(err=>{
            console.log(err)
          })
    }
  }


  return (
        <div style={{backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)'}}>
           <div><img  style={{height:'150px',width:'100%'}} src="https://th.bing.com/th/id/OIP.VJguKOlfZAkRVh5gFDNW5QHaEK?pid=ImgDet&rs=1"/></div>
        
        <Box sx={{marginTop:'20px',marginLeft:'200px',height:'660px'}} flex={4}>
 <div style={{ height:'50px',display:'flex',flexDirection:'column',marginTop:'10px',justifyContent:'space-between'}}>
    <h2 style={{color:'blue'}}>Add Artist</h2>  

        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <label>Artist Name</label> <TextField id="outlined-basic" name="Aname" label="artist name" variant="outlined" onChange={handleChange} required /><br/>
   <br/>
   <label>Date of Birth</label> <input type='date' name="dob" onChange={handleChange} /><br/>
   <label>Bio</label><TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          name="bio"
          multiline
          maxRows={4}
        //   value={value}
           onChange={handleChange}
        /> <br/>
        <Button style={{width:'10px'}} variant="contained" >Cancel </Button><Button style={{width:'10px'}} variant="contained" onClick={clickhander}>Done</Button>
    
  </Box></div>
        </Box>
   
   </div>
  )
}

export default Artist
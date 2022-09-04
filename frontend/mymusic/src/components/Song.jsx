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
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
// import Sidebar from '../Sidebar/Sidebar';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const Song = () => {
    
   const [artist,setArtist]=useState([]);
   const [artist1,setArtist1]=useState([]);
   const navigate=useNavigate()
  const [info,setInfo]=useState({
    song:"",
    dor:"",
   
    Aname:"",
    rating:1
})
const changeHandler=(event)=>{
  setInfo({...info,[event.target.name]:event.target.value})
}
const onfilechnage=(event)=>{
  setFile(event.target.files[0])
  }
const [file,setFile]=useState("")

const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
 // console.log(JSON.stringify(personName))
  const clickhander=()=>{
    const formdata=new FormData()
  formdata.append("song",info.song)
  formdata.append("dor",info.dor)
  let str=""
  personName.map(ele=>{
    let count=personName.length;
        str+=ele
        count=count-1
        while(count!=0)
        {
          str+=","
        }
       
  })
  console.log("str",str)
  formdata.append("Aname",str)
  formdata.append("rating",info.rating)
  
  formdata.append("artwork",file)
  const configobj={
    headers:{
        'Content-Type':'multipart/form-data'
    }
  }
  console.log("info",info)
            console.log("formdata",formdata.get('song'))
            axios.post(`http://localhost:9003/song/save`,formdata,configobj).then(response=>{
        console.log(response.data)
        }).catch(err=>{
        console.log(err)
        })
  }
 useEffect(()=>{
  axios.get("http://localhost:9003/artist/getdata").then(res=>{
    console.log("res----->",res)
      console.log(res.data.data[0].Aname)
      for(let i=0;i<res.data.data.length;i++)
      {
        if(!artist.includes(res.data.data[i].Aname))
        {
          artist.push(res.data.data[i].Aname)
        }
        
      }

      setArtist1(artist)

        }).catch(err=>{
          console.log(err)
        })
 },[])

  return (
    //  <Stack direction='row' spacing={2} justifyContent='space-between'>
   <div style={{backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)'}}> 
    <div><img  style={{height:'150px',width:'100%'}} src="https://th.bing.com/th/id/OIP.VJguKOlfZAkRVh5gFDNW5QHaEK?pid=ImgDet&rs=1"/></div>
        
        <Box sx={{marginTop:'20px',marginLeft:'200px', height:'660px'}} flex={4}>
 <div style={{ height:'50px',display:'flex',flexDirection:'column',marginTop:'10px',justifyContent:'space-between'}}>
    <h2 style={{color:'blue'}}>Adding a New Song</h2>  

        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <label>Song Name</label> <TextField id="outlined-basic" name="song" label="song"  required variant="outlined"  onChange={changeHandler}/><br/>
   <br/>
   <label>Date of Releaase</label> <input type='date' name="dor" required='true' onChange={changeHandler}/><br/>
   <label>Artwork</label><input type='file'  onChange={onfilechnage}/><br/>

    <label>Artist</label>  <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Artist</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Artist" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {artist1.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> <Link href="/artist">+ Add Artist</Link><br/>
      
        <Button style={{width:'10px'}} variant="contained" >Cancel </Button><Button style={{width:'10px'}} variant="contained" onClick={clickhander} >Done</Button>
    
  </Box></div>
        </Box>
    {/* //  </Stack> */}
   </div>
  )
}

export default Song
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
const Home = () => {

  const navigate=useNavigate()
  const [songlist,setSonglist]=useState([])
  const [artistlist,setArtistlist]=useState([])
  const [refresh,setRefresh]=useState(false)
  const [songs,setSongs]=useState([])
  const [value, setValue] = useState();
  const [editdata,setEditdata]=useState({
    rating:0,
  
})
const [state,setState] = useState({
  name:''
  
})
// var arr=[]
const [editdata1,setEditdata1]=useState({
  Aname:"",
  dob:"",
  songarr:[]

})
const [temp,setTemp]=useState([])

const songdata=()=>{
  alert(state.name)
  
}
const handleChange=(e)=>{
  
  setState({...state,[e.target.name]:e.target.value})
}

const artistdata=()=>{
 axios.get(`http://localhost:9003/artist/getsongs`).then(response=>{
    setArtistlist(response['data'].data)
   
    
      
    }).catch(err=>{
    console.log(err)
    })
}

 

    useEffect(()=>{
      axios.get(`http://localhost:9003/song/getdata/?name=${state.name}`).then(response=>{
    setSonglist(response['data'].data)
   // console.log(data)
}).catch(err=>{
console.log(err)
})
      //songdata()
      axios.get(`http://localhost:9003/artist/getall`).then(response=>{
   
      
      }).catch(err=>{
      console.log(err)
      })
     
       
        artistdata()
        axios.put(`http://localhost:9003/song/editrating`,editdata).then(response=>{
  
          console.log("updated")
      }).catch(err=>{
      console.log(err)
      })


      },[editdata,state,songlist])
 
  


const changeHandler=(item_id,item_rating)=>{
  //alert(item_rating)
  setEditdata({
    
    rating:item_rating,
    _id:item_id
  })
 
 
}
  return (
    <div style={{backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)'}}>
       
        <div><img  style={{height:'150px',width:'100%'}} src="https://th.bing.com/th/id/OIP.VJguKOlfZAkRVh5gFDNW5QHaEK?pid=ImgDet&rs=1"/></div>
        <div style={{marginLeft:'100px'}}>
      <label style={{color:'blue',fontSize:'large'}}>Search Artist</label>&nbsp;&nbsp;<input type="text" name='name' style={{width:'70%',height:'50px',backgroundColor:'beige',marginTop:'20px',borderRadius:'10px' ,marginRight:'200px'}} placeholder='Search artistname here..' value={state.name} onChange={handleChange}/>
   </div><br/>
        <div style={{display:'flex',justifyContent:'space-between',marginRight:'40px'}}> <h1 style={{marginLeft:'20px'}}>Top 10 Songs</h1><button style={{backgroundColor:'pink'}} onClick={()=>navigate('/song')}>+ Add song</button></div>
           
        <div style={{marginTop:'20px'}}>
    <TableContainer component={Paper} style={{backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)'}}>
    
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          
          <TableRow>
            <StyledTableCell align="center">Artwork</StyledTableCell>
            <StyledTableCell align="center">Song</StyledTableCell>
            <StyledTableCell align="center">Date of release</StyledTableCell>
            <StyledTableCell align="center">Artist</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
            
            
          </TableRow>
         
        </TableHead>
        <TableBody>
                {songlist.map((row) => (
               <TableRow>
              <Card sx={{ display:'flex',flexDirection:'row',marginLeft:'20px'}}>
     <CardActionArea>
       <CardMedia
         component="img"
         style={{borderColor:"red" ,height: '100px',
         width: '50px',
         objectFit: 'contain',justifyContent:'center'}}
        
         image={row.artwork}
         alt={row.Moviename}
       />
       
     </CardActionArea>
   </Card>
              <StyledTableCell align="center">{row.song}</StyledTableCell>
              <StyledTableCell align="center">{row.dor}</StyledTableCell>
              <StyledTableCell align="center">{row.Aname}</StyledTableCell>
              <StyledTableCell align="center"><Rating
        name="simple-controlled"
        value={row.rating}
        onChange={(event, newValue) => {
          setValue(newValue);
          changeHandler(row._id,newValue)
        }}
        
      /></StyledTableCell>
             
              </TableRow>
                   ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',marginRight:'40px',marginTop:'40px'}}> <h1>Top 10 Artist</h1><button onClick={()=>navigate('/artist')}>+ Add Artist</button></div>
           
        <div style={{marginTop:'20px'}}>
    <TableContainer component={Paper}  style={{backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)'}}>
    
      <Table sx={{ minWidth: 700,border:'1 black solid' }} aria-label="customized table">
        <TableHead>
          
          <TableRow>
            <StyledTableCell align="center">Artist</StyledTableCell>
            <StyledTableCell align="center">Date of Birth</StyledTableCell>
            <StyledTableCell align="center">Songs</StyledTableCell>
            
            
          </TableRow>
         
        </TableHead>
        <TableBody>
        {artistlist.map((row1) => (
               <TableRow>
              
              <StyledTableCell align="center">{row1.Aname}</StyledTableCell>
              <StyledTableCell align="center">{row1.dob}</StyledTableCell>
              <StyledTableCell align="center">{row1.song}</StyledTableCell>
             
             
              </TableRow>
                   ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
    </div>
  )
}

export default Home
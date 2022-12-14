import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { storingUserInfo } from '../../slice/UserInfoSlice'
import img1 from './images/img1.jpg'




function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const theme = createTheme();

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = React.useState({
        email: "",
        password: ""
    })

    const changeHandeler = (e) => {
        setValue({ ...value, [e.target.id]: e.target.value })
    }
    const Clickandelr = () => {
        if( value.email==="" && value.password==="" )
        {
            alert("All fields required")
        }
        else
        {
        axios.post("http://localhost:9003/auth/login", value).then((response) => {
            console.log(response.data)
            dispatch(storingUserInfo(response.data))
            setValue({
                email: "",
                password: ""
            })
            if(response.data.isAdmin===true)
            {
                navigate('/inventory')
            }
            else
            {
                navigate('/buyers')
            }
            
        }).catch((err) => {
            console.log(err)
        })
     }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        
    <div style={{display:'flex',flexDirection:'row'}}>
        <div><img  style={{height:'50',width:'700px'}} src="https://th.bing.com/th/id/OIP.VJguKOlfZAkRVh5gFDNW5QHaEK?pid=ImgDet&rs=1"/></div>
        <div style={{marginLeft:'150px', marginTop:'100px',height:'300px',Width:'300px'}}> <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={changeHandeler}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={value.email}
                        />
                        <TextField
                            onChange={changeHandeler}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={value.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={Clickandelr}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item onClick={() => navigate('/signup')} style={{ cursor: "pointer" }}>
                                <Link to="signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
        </div>
       </div>
    );
}

export default Login
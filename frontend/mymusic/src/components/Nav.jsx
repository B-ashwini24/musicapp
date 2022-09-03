import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const p=['/addstock','/inventory']
const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
const navigate=useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"  >
      <Container maxWidth="xl" sx={{backgroundColor:'blue'}} >
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Spotify
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
        
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar  alt="Remy Sharp" src="data:image/jpeg;base64,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" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Button color="inherit" style={{marginLeft:'900px'}} onClick={()=>navigate('/Login')}>Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
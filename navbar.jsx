import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from '../context/AuthContext';

const BarraAutenticado = () => {
  const navigate = useNavigate();
  const { cerrarSesion } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <HomeIcon />
        </IconButton>
        <Button color="inherit" onClick={() => navigate('/inicio-sesion')}>Iniciar sesión</Button>
        <Button color="inherit" onClick={() => navigate('/registrarse')}>registrarse</Button>
        <Button color="inherit" onClick={() => navigate('/form')}>Nueva reseta</Button>
        <Button color="inherit" onClick={() => cerrarSesion()}>Cerrar Sesión</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
};

const BarraNoAutenticado = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <HomeIcon />
        </IconButton>
        <Button color="inherit" onClick={() => navigate('/inicio-sesion')}>Iniciar sesión</Button>
        <Button color="inherit" onClick={() => navigate('/registrarse')}>registrarse</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
};

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? <BarraAutenticado /> : <BarraNoAutenticado />}
    </div>
  );
};



export default Navbar;



  
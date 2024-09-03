import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { RecipeContext } from './../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Paper, Button } from '@mui/material';

function Detail() {
  const location = useLocation();
  const recipe = location.state["recipe"];
  const index = location.state["index"];
  const navigate = useNavigate();
  const { deleteRecipe } = useContext(RecipeContext);
  const handleDelete = (i) =>{
    deleteRecipe(i)
    navigate('/')
  }
  const handleClick = () =>{
    navigate('/')
  }
  return (
        <Container maxWidth="md" sx={{ mt: 4, width: 550}}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {recipe.name}
        </Typography>
        <Typography variant="body1" >
          {recipe.description}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Ingredientes
          </Typography>
          <Typography variant="body1" >
          {recipe.ingredientes}
        </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Pasos
          </Typography>
          <Typography variant="body1" >
          {recipe.pasos}
        </Typography>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={() =>handleDelete(index)}>
            Eliminar
          </Button>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Volver
          </Button>
        </Box>
      </Paper>
    </Container>    
  );
}

export default Detail;

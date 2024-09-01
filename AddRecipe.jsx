import React from 'react';
import { useState, useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || description.trim() === '') {
      setError('Todos los campos son obligatorios.');
      return;
    }

    addRecipe({ name, description });
    setName('');
    setDescription('');
    setError('');
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{
      mt: 4,
      p: 3,
      backgroundColor: '#e8faf6',
      borderRadius: 2,
      boxShadow: 5,
      height: 450,
    }}>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Agregar Nueva Receta
        </Typography>
        {error && (
          <Typography variant="body1" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre de la receta"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Agregar Receta
          </Button>
        </form>
      </Box>
  </Container>
  );
};

export default RecipeForm;

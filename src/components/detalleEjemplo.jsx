import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Paper } from '@mui/material';

const DetalleReceta = () => {
  const recipe = {
    name: 'Tarta de Manzana',
    description: 'Una deliciosa tarta de manzana hecha con una base crujiente y un relleno suave.',
    ingredients: [
      '3 manzanas',
      '200g de harina',
      '100g de azúcar',
      '2 huevos',
      '50g de mantequilla',
      '1 cucharadita de canela',
    ],
    steps: [
      'Precalentar el horno a 180°C.',
      'Pelar y cortar las manzanas en rodajas finas.',
      'Mezclar la harina, el azúcar, los huevos y la mantequilla hasta obtener una masa homogénea.',
      'Agregar las manzanas y la canela a la mezcla.',
      'Verter la mezcla en un molde para tarta enmantequillado.',
      'Hornear durante 40 minutos o hasta que la tarta esté dorada.',
    ],
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {recipe.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {recipe.description}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Ingredientes
          </Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Pasos
          </Typography>
          <List>
            {recipe.steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}. ${step}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default DetalleReceta;

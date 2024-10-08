import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardRecipe(props) {
  return (
    <Box sx={{ width: 500, margin:1 }}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography variant="body2">
        {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={props.onClick}>Ver mas</Button>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}

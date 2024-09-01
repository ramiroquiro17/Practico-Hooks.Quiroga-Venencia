
import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { RecipeContext } from './../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';

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
      <div className="App">
        <h1>detalle</h1>
        <h3 >{recipe.name}</h3>
        <p>{recipe.description}</p>
        <button onClick={() =>handleDelete(index)}>Eliminar</button>
        <button onClick={() =>handleClick(index)}>Volver</button>
      </div>
    
  );
}

export default Detail;

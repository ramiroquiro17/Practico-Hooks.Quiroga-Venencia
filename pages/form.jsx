import React from 'react';
import '../App.css';
import RecipeForm from '../components/recipes/AddRecipe';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

function Form() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/')
  }
  
  return (
      <div className="App">
        <h1>form</h1>
        <RecipeForm />
        <button onClick={handleClick}>Cancelar</button>
      </div>
    
  );
}

export default Form;

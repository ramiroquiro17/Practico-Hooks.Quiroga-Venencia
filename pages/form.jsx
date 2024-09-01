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
        <RecipeForm />        
        <button onClick={handleClick} style={{
          marginTop: '10px',
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '4px', 
          }}> 
        
          Cancelar 
        
        </button>
      </div>
    
  );
}

export default Form;

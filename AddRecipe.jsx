import React from 'react';
import { useState, useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, description });
    setName('');
    setDescription('');
    navigate('/');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre de la receta" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Descripción" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <button type="submit">Agregar Receta</button>
    </form>
  );
};

export default RecipeForm;

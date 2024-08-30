import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

import React from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import RecipeItem from './RecipeDetail';

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} index={index} />
      ))}
    </div>
  );
};

export default RecipeList;

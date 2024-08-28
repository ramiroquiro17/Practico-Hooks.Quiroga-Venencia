import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
const RecipeItem = ({ recipe, index }) => {
  const { deleteRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const object = {
    "recipe": recipe,
    "index": index
  }
  const handleClick = () =>{
    navigate('/detalle', { state: object })}


  return (
    <div>
      <h3 onClick={handleClick}>{recipe.name}</h3>
    </div>
  );
};

export default RecipeItem;

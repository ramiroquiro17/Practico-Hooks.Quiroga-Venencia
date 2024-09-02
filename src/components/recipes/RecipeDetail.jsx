import { useNavigate } from 'react-router-dom';
import CardRecipe from '../card';
const RecipeItem = ({ recipe, index }) => {
  const navigate = useNavigate();
  const object = {
    "recipe": recipe,
    "index": index
  }
  const handleClick = () =>{
    navigate('/detalle', { state: object })}


  return (
  <CardRecipe name={recipe.name} description={recipe.description} onClick={handleClick}/>
  );
};

export default RecipeItem;

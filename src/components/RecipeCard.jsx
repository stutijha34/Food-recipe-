function RecipeCard({ recipe }) {
    return (
      <div className="recipe-card p-4 border rounded shadow">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{recipe.title}</h3>
      </div>
    );
  }
  
  export default RecipeCard;
  
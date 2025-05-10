import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const{id}=useParams();
    useEffect(()=>{
        const fetchrecipe=async ()=>{
            const res=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=6b86d351b8374b4fb8e06e9e2e27bd8c`)
            setRecipe(res.data)
        }
        fetchrecipe();
    },[id])
  return (
    <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image}alt={recipe.title}></img>
        <h3>ingredient:</h3>
        <uL>
            {recipe.extendedIngredients.map((ing)=>(
                 <li key={ing.id}>{ing.original}</li>
           ) )}
           
        </uL>
        <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>

    </div>
  )
}

export default RecipeDetail
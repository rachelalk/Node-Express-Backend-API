import recipes from "../libs/recipes.js";

// GET ALL RECIPES
export function getRecipes() {
  return recipes; 
}

// GET A RECIPE BY ID
export function getRecipeByID(id) {
  for (let i=0; i<recipes.length; i++) {
    if(id === recipes[i].id) {
      return recipes[i];
    }
  }
}

// CREATE A RECIPE
export function createRecipe(newRecipe) {
  recipes.push(newRecipe);
  return newRecipe;
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {
  for (let i=0; i<recipes.length; i++) {
    if(id === recipes[i].id)  {
      recipes[i] = updatedRecipe;
      return updatedRecipe;
    } 
  }
}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {
  for (let i=0; i<recipes.length; i++) {
    if (id === recipes[i].id) {
      let deletedRecipe = recipes.splice(i, 1);
      return deletedRecipe;
    }
  }
}

// SEARCH RECIPES BY TITLE
export function seachRecipeByTitle(title) {
  let result = [];
  for (let i=0; i<recipes.length; i++) {
    if (recipes[i].title.toLowerCase().includes(title.toLowerCase())) {
      result.push(recipes[i]);
    }
  }
  return result;
}

//Search recipes by ingredients
export function seachRecipeByIngredients(ingredients) {
  let result = [];
  // loop through the recipes array
  for (let i=0; i<recipes.length; i++) {
    // at each item in the recipes array loop through the ingredients array
    for (let x=0; x < recipes[i].ingredients.length; x++) {
      if (recipes[i].ingredients[x].toLowerCase().includes(ingredients.toLowerCase())) {
        result.push(recipes[i]);
        break;
      }
    }
  }
  return result;
}
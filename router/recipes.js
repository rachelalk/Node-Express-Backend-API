/*
- Update CommonJS code to ES6 syntax ✅ 
- Import express ✅ 
- create router using express.Router() ✅ 
- Import the data from recipes ✅ 
- Handle recipes path, get request with router.get ✅ 
  - reponse with json ✅ 
*/
import express from 'express';
const recipesRouter = express.Router();

// import the models
import {
  updateRecipeByID,
  createRecipe,
  getRecipeByID,
  getRecipes,
  deleteRecipeByID,
  seachRecipeByTitle,
  seachRecipeByIngredients
} from '../models/recipes.js';


// import the recipes
import recipes from '../libs/recipes.js';

// handle get request
recipesRouter.get('/', (req, res) => {

  let title = req.query.title;
  let ingredients = req.query.ingredients;
  if (title) {
    const responseObject = {
      success: true,
      payload: seachRecipeByTitle(title)
    }
    res.json(responseObject);

  } if (ingredients) {
        const responseObject = {
          success: true,
          payload: seachRecipeByIngredients(ingredients)
        }
        res.json(responseObject);
  }else{
    const responseObject = {
      success: true,
      payload: getRecipes()
    }
    res.json(responseObject);
  }
});

//create handle request for /:id 
//store id in a variable✅
//create empty variable to store found recipe✅
//use a for loop to check recipe list for id ✅
//if statement - convert string to number✅
//assign found recipe to variable✅
//create response object ✅
//res.json✅

recipesRouter.get('/:id', function (req,res) {
  const responseObject = {
    success: true,
    payload: getRecipeByID(Number(req.params.id))
  }
  res.json(responseObject);
})

/*
- create handle for POST request ✅ 
- store request body in variable ✅ 
- push body to the recipes array ✅ 
- create response object ✅ 
- json() ✅ 
*/
recipesRouter.post('/', (req, res) => {
  const responseObject = {
    success: true,
    payload: createRecipe(req.body)
  }
  res.json(responseObject);
});

//create handle for PUT request✅
//router.post using /recipes/:id✅
//assign body to variable✅
//for loop to locate recipe with correct id ✅
//make id into number and assign to variable id✅
//remove previous recipe and replace body✅
//create response object✅
//res.json()request✅

recipesRouter.put('/:id', (req, res) => {
  const responseObject = {
    success: true,
    payload: updateRecipeByID(Number(req.params.id), req.body)
  }
  res.json(responseObject);
})

// create handle for DELETE request✅
// Grab the id from the parameters✅
// Use map to find the matchind element by id✅
// remove matching element using splice✅
// Create response object✅
// json() response✅

recipesRouter.delete('/:id', (req, res) => {
  const responseObject = {
    success: true,
    payload: deleteRecipeByID(Number(req.params.id))
  }
  res.json(responseObject);
})


export default recipesRouter;

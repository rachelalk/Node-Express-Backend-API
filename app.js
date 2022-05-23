import express from "express";

import { html } from "./config.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());


//add counter middlewear
let count=0;
app.use((req, res, next) => {
  count++;
  console.log(count);
  next()
})

//add request type middlewear
app.use('/', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

/*
- Import the recipes library ✅ 
- handle get request for all /recipes ✅ 
  - Direct recipes request to the recipes router ✅ 
*/

import recipesRouter from './router/recipes.js';

app.use('/recipes', recipesRouter);



/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

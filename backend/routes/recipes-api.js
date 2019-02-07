var express = require('express');
var recipeOperations = require('../db/recipe-operations');
var router = express.Router();

/* GET users listing. */
router.get('/getRecipe', (req, res) => {
  recipeOperations.getRecipes(res);
});
router.post('/newRecipe', function (req, res) {
  var obj = req.body;
  recipeOperations.saveRecipe(obj, res);
});
router.put('/editRecipe/:id', (req, res) => {
  var id = req.params.id;
  var obj = req.body;
  recipeOperations.editRecipe(id, obj, res)
});
router.delete('/deleteRecipe/:id', (req, res) => {
  var id = req.params.id;
  recipeOperations.deleteRecipe(id, res);
})

module.exports = router;

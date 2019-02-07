var express = require('express');
var ingredientOperations = require('../db/ingredient-operations');
var router = express.Router();

/* GET users listing. */
router.get('/getIngredients', (req, res) => {
    ingredientOperations.getIngredients(res);
});
router.post('/newIngredient', function (req, res) {
    var obj = req.body;
    ingredientOperations.saveIngredient(obj, res);
});
router.put('/editIngredient/:id', (req, res) => {
    var id = req.params.id;
    var obj = req.body;
    ingredientOperations.editIngredient(id, obj, res)
});
router.delete('/deleteIngredient/:id', (req, res) => {
    var id = req.params.id;
    ingredientOperations.deleteIngredient(id, res);
})

module.exports = router;

const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var recipeSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    ingredients: [{
        name: String,
        amount: Number
    }]
});

var recipeModel = mongoose.model('recipesModel', recipeSchema);

module.exports = recipeModel;
const mongoose = require('../common/connection');
var Schema = mongoose.Schema;
var ingredientSchema = new Schema({
    name: String,
    amount:Number
});

var ingredientModel = mongoose.model('ingredientModels', ingredientSchema);

module.exports = ingredientModel;

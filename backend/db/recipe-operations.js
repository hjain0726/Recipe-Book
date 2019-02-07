var recipeModel = require('../db/schema/recipe-schema');

const recipeOperations = {
    saveRecipe(obj, res) {
        var obj = new recipeModel(obj);
        obj.save((err) => {
            if (err) {
                res.json({ msg: 'error' });
            } else {
                res.json({ msg: "Successfully Saved" });
            }
        });
    },

    getRecipes(res) {
        recipeModel.find({}, (err, docs) => {
            if (err) {
                res.json({ msg: "error" })
            } else {
                if (docs && docs.length > 0) {
                    res.json(docs);
                }
            }
        })
    },
    editRecipe(id, obj, res) {
        recipeModel.findByIdAndUpdate(id, obj, (err) => {
            if (err) {
                res.json({ msg: 'error' });
            } else {
                res.json({ msg: 'Successfully updated' });
            }
        })
    },
    deleteRecipe(id, res) {
        recipeModel.findByIdAndRemove(id, (err) => {
            if (err) {
                res.json({ msg: 'error' });
            } else {
                res.json({ msg: 'succesfully deleted' });
            }
        })
    }
};

module.exports = recipeOperations;
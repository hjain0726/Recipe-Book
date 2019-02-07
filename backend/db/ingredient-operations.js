var ingredientModel = require('./schema/ingredient-schema');

const ingredientOperations = {
    saveIngredient(obj, res) {
        var obj = new ingredientModel(obj);
        obj.save((err) => {
            if (err) {
                res.json({ msg: 'error' });
            } else {
                res.json({ msg: "Successfully Saved" });
            }
        });
    },

    getIngredients(res) {
        ingredientModel.find({}, (err, docs) => {
            if (err) {
                res.json({ msg: "error" })
            } else {
                if (docs && docs.length > 0) {
                    res.json(docs);
                }
            }
        })
    },
    editIngredient(id, obj, res) {
        ingredientModel.findByIdAndUpdate(id, obj, (err) => {
            if (err) {
                res.json({ msg: 'error' });
            } else {
                res.json({ msg: 'Successfully updated' });
            }
        })
    },
    deleteIngredient(id, res) {
        ingredientModel.findByIdAndRemove(id, (err) => {
            if (err) {
                res.json({ msg: 'error' });
            } else {
                res.json({ msg: 'succesfully deleted' });
            }
        })
    }
};

module.exports = ingredientOperations;
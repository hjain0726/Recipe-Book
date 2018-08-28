import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Pizza',
            'A super-tasty pizza -just awesome',
            'https://www.elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/pizza.jpg',
            [
                new Ingredient('Tomatoes', 1),
                new Ingredient('Capsicum', 1)
            ]),
        new Recipe('Burger',
            'awesome one',
            'https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slservice: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slservice.addIngredients(ingredients);
    }
}
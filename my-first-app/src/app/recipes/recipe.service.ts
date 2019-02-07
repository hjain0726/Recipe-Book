import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RecipeService {
    path = "http://localhost:3000/api";
    recipesChanged = new Subject<Recipe[]>();
    private recipes;

    constructor(private slservice: ShoppingListService, private http: HttpClient) { }


    setData(recipes) {
        this.recipes = recipes;
        console.log(this.recipes);
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients) {
        this.slservice.addIngredients(ingredients);
    }

    getData() {
        return this.http.get(this.path + '/getRecipe');
    }

    refreshData() {
        this.getData().subscribe((recipes) => {
            this.recipes = recipes;
            this.recipesChanged.next(this.recipes);
        });
    }

    addRecipe(recipe: Recipe) {
        this.http.post(this.path + '/newRecipe', recipe).subscribe((res) => {
            this.refreshData();
        });
    }

    updateRecipe(index: number, newRecipe) {
        var id = this.recipes[index]._id;
        this.http.put(this.path + '/editRecipe/' + id, newRecipe).subscribe((res) => {
            console.log(res);
            this.refreshData();
        })
    }

    deleteRecipe(index: number) {
        var id = this.recipes[index]._id;
        this.http.delete(this.path + '/deleteRecipe/' + id).subscribe((res) => {
            this.refreshData();
        });
    }

}
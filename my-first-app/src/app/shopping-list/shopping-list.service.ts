import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class ShoppingListService {
    ingredientsChanged = new Subject();
    startedEditing = new Subject<number>();
    private ingredients;
    path = "http://localhost:3000/api/shopping";
    constructor(private http: HttpClient) {}
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    setIngredients(ingredients) {
        this.ingredients = ingredients;
    }

    addIngredients(ingredients) {
        for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }
    }

    refreshData() {
        this.getIngredients().subscribe((ingredients) => {
            this.ingredients = ingredients;
            this.ingredientsChanged.next(this.ingredients);
        })
    }
    getIngredients() {
        return this.http.get(this.path + '/getIngredients');
    }
    addIngredient(ingredient) {
        this.http.post(this.path + '/newIngredient', ingredient).subscribe((res) => {
            console.log(res);
            this.refreshData();
        });
    }
    updateIngredient(index: number, newIngredient) {
        var id = this.ingredients[index]._id
        this.http.put(this.path + '/editIngredient/' + id, newIngredient).subscribe((res) => {
            this.refreshData();
        });
    }
    deleteIngredient(index: number) {
        var id = this.ingredients[index]._id
        this.http.delete(this.path + '/deleteIngredient/' + id).subscribe((res) => {
            this.refreshData();
        });
    }
}
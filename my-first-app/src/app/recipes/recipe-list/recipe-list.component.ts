import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    //recipes: Recipe[] = [];
    recipes;
    subscription: Subscription;

    constructor(private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient) { };

    ngOnInit() {
        this.subscription = this.recipeService.recipesChanged.subscribe((recipes) => {
            this.recipes = recipes;
        });
        this.recipeService.getData().subscribe((recipes) => {
            this.recipes = recipes;
            this.recipeService.setData(recipes);
        });;
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
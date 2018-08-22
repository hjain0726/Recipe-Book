import { Component, ViewChild, Output,EventEmitter, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{
  @Output() addIngredient=new EventEmitter<Ingredient>();
  @ViewChild('nameInput') name:ElementRef;
  @ViewChild('amountInput') amount:ElementRef;
  
   addNew(){
   const newIngredient=new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    this.addIngredient.emit(newIngredient);
   }
}

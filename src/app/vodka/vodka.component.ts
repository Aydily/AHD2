import { Component } from '@angular/core';
import { VodkaService } from '../services/vodka.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [HttpClientModule], 
  providers:[VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent {

 vodka: any[] = [];

 constructor(private vodkaServicio: VodkaService){}

 ngOnInit(): void {
  this.vodkaServicio.obtenerCocteles().subscribe(datos => {
    this.processDrinks(datos.drinks);
  });
}

processDrinks(drinks: any[]): void {
  this.vodka = drinks.map(drink => {
    const ingredients = [];
    let i = 1;
    while (drink[`strIngredient${i}`]) {
      ingredients.push(drink[`strIngredient${i}`]);
      i++;
    }
    drink.ingredients = ingredients; 
    return drink; 
  });
}

}
import { Component } from '@angular/core';
import { WineService } from '../services/wine.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [HttpClientModule], 
  providers: [WineService],
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css'
})
export class WineComponent {

  vinos: any[] = [];


  constructor(private vinoServicio: WineService){}

  ngOnInit(): void {
    this.vinoServicio.obtenerCocteles().subscribe(datos => {
      this.processDrinks(datos.drinks);
    });
  }
  
  processDrinks(drinks: any[]): void {
    this.vinos = drinks.map(drink => {
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
import { Component } from '@angular/core';
import { TequilaService } from '../services/tequila.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule], 
  providers:[TequilaService], 
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent {
 tequila: any[] = [];

  constructor(private tequilaServicio: TequilaService){}

  ngOnInit(): void {
    this.tequilaServicio.obtenerCocteles().subscribe(datos => {
      this.processDrinks(datos.drinks);
    });
  }
  
  processDrinks(drinks: any[]): void {
    this.tequila = drinks.map(drink => {
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
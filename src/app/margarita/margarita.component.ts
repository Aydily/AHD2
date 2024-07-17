import { Component } from '@angular/core';
import { MargaritaService } from '../services/margarita.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent {
  margarita: any[] = [];

  constructor(private margaritaServicio: MargaritaService){}

  /* ngOnInit(): void{
    this.margaritaServicio.obtenerMargarita().subscribe(datos=>{
      this.margarita = datos.drinks;
      this.ingredientes();
    });

}
ingredientes()
{
  this.margarita = this.margarita.map(drink => {
    const ingrediente = [];
    let i = 1;
    while (drink[`strIngredient${i}`]) {
      ingrediente.push(drink[`strIngredient${i}`]);
      i++;
    }
    return {
      ingrediente
    };
  });

}
} */

ngOnInit(): void {
  this.margaritaServicio.obtenerMargarita().subscribe(datos => {
    this.processDrinks(datos.drinks);
  });
}

processDrinks(drinks: any[]): void {
  this.margarita = drinks.map(drink => {
    const ingredients = [];
    let i = 1;
    while (drink[`strIngredient${i}`]) {
      ingredients.push(drink[`strIngredient${i}`]);
      i++;
    }
    drink.ingredients = ingredients; // Añade la propiedad ingredients al objeto drink
    return drink; // Retorna el objeto original con la nueva propiedad
  });
}

}

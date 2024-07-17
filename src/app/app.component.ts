import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoctelesService } from './services/cocteles.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProviders } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, HttpClientModule],
  providers:[CoctelesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cocteles: any[] = [];

  constructor(private coctelServicio: CoctelesService){}

  ngOnInit(): void{
    this.coctelServicio.obtenerCocteles().subscribe(datos=>{
      this.cocteles = datos.drinks;
    });
  }
  
}

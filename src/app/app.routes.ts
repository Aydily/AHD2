import { provideRouter, Routes } from '@angular/router';
import { MargaritaComponent } from './margarita/margarita.component';
import { VodkaComponent } from './vodka/vodka.component';
import { TequilaComponent } from './tequila/tequila.component';
import { WineComponent } from './wine/wine.component';

export const routes: Routes = [
    {
        path: '',
        component: MargaritaComponent
    },
    {
        path: 'margarita',
        component: MargaritaComponent
    },
    {
        path: 'vodka',
        component: VodkaComponent
    },
    {
        path: 'tequila',
        component: TequilaComponent
    },
    {
        path: 'vino',
        component: WineComponent
    }
];
export const appRoutingProviders = [provideRouter(routes)];
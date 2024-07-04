import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreguntaUnoComponent } from './dashboard/pregunta-uno/pregunta-uno.component';
import { PreguntaDosComponent } from './dashboard/pregunta-dos/pregunta-dos.component';

export const routes: Routes = [
    {path: "dashboard", component:DashboardComponent,
        children: [
            {path: "preguntaUno", component:PreguntaUnoComponent},
            {path: "preguntaDos", component:PreguntaDosComponent}
        ]
    },
];

import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router, private route:ActivatedRoute){}



  irPreguntaUno():void{
    this.router.navigate(["preguntaUno"],{relativeTo: this.route})
  }

  irPreguntaDos():void{
    this.router.navigate(["preguntaDos"],{relativeTo: this.route})
  }

}

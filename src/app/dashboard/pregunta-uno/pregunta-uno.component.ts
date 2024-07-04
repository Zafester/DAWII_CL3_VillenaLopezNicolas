import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Post } from './post.interface';
import { UnoService } from './uno.service';
import { NgFor } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-pregunta-uno',
  standalone: true,
  imports: [MaterialModule, NgFor],
  templateUrl: './pregunta-uno.component.html',
  styleUrl: './pregunta-uno.component.css'
})
export class PreguntaUnoComponent {
  posts: Post[] = []

  constructor(private unoService:UnoService){

  }

  ngOnInit(): void {
    this.unoService.getAllPosts().subscribe(filteredLocations => {
      this.posts = filteredLocations;
      console.log(this.posts);
    });
}
}









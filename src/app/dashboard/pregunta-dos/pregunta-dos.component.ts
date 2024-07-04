import { Component } from '@angular/core';
import { Post2 } from '../pregunta-uno/post.interface';
import { UnoService } from '../pregunta-uno/uno.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pregunta-dos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pregunta-dos.component.html',
  styleUrl: './pregunta-dos.component.css'
})
export class PreguntaDosComponent {
  posts: Post2[] = []

  constructor(private unoService:UnoService){

  }

  ngOnInit(): void {
    this.unoService.getAllPost2().subscribe(filteredLocations => {
      this.posts = filteredLocations;
      console.log(this.posts);
    });
}
}

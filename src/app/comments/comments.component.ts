import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <div class="img"><img src="https://github.com/Erick-2020.png" alt=""></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus! Vero voluptatum esse, dolorem
    est doloribus cupiditate facere fuga voluptas, culpa aspernatur soluta iusto. Recusandae voluptates quo
    magni reiciendis velit.</p>
  `,
  styles: `
    .img{
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}

import { Component } from '@angular/core';
import { Post } from './post.interface';
import { posts } from './posts.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = '';
  listaPosts: Post[] = [];
  // 	prueba: PruebaComponent = new PruebaComponent('dasdladk');

  constructor() {
    this.inicializar();
    // this.prueba.setVariable('alvaorjasd');
  }

  inicializar() {
    this.listaPosts = posts;
  }

  deletePost(post: Post) {
    this.message = 'Se elimino el post con el id: ' + post.id;
    const index = this.listaPosts.indexOf(post);
    this.listaPosts.splice(index, 1);
  }
}

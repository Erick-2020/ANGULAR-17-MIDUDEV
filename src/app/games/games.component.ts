import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  // COMUNICACION ENTRE COMPONENTES PADRE A HIJO PASO 1
  @Input() username:String = "";

  //CPMUNICACION ENTRE COMPONENTES HIJO A PADRE PASO 1
  @Output() addFavoriteEvent = new EventEmitter<string>();

  // COMUNICACION ENTRE COMPONENTES HIJO A PADRE PASO 2
  // Creamos el metodo o dato que vamos a usar para comunicar al componentr padre
  // bajo en este caso el metodo emit para EMITIR
  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName)
  }
  games = [
    {
      id: 1,
      name: "Free Fire"
    },
    {
      id: 2,
      name: "PUBG MOBILE"
    },
    {
      id: 3,
      name: "CoC"
    }
  ]
}

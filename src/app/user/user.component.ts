import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userName = "leo";
  isLogin = false;

  //COMUNICACION ENTRE COMPONENTES HIJO A PADRE PASO 4
  // porpiedad para guardar la info
  favGame = "";

  //COMUNICACION ENTRE COMPONENTES HIJO A PADRE PASO 5
  // porpiedad para OBTENER la info
  getFavorite(gameName: string){
    this.favGame = gameName;
  }

  greet(){
    alert("Hola!!!");
  }
}

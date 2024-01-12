import { Component } from '@angular/core';

   @Component({
     selector: 'app-square',
     templateUrl: './square.component.html',
     styleUrls: ['./square.component.css']
   })
   export class SquareComponent {
     backgroundColor: string = 'red';

     changeColor() {
       const colors = ['red', 'blue', 'green', 'yellow'];
       const randomIndex = Math.floor(Math.random() * colors.length);
       this.backgroundColor = colors[randomIndex];
     }
     
     changeBlack() {
       const c = ['black'];
       
       this.backgroundColor = c[0];
       return c;
       
     }

     changeRed() {
       const c2 = ['red'];
       
       this.backgroundColor = c2[0];
     }

     changeYellow() {
       const c3 = ['yellow'];
       
       this.backgroundColor = c3[0];
     }

     changeBlue() {
       const c4 = ['blue'];
       
       this.backgroundColor = c4[0];
     }

   }
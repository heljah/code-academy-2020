import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personName = 'name';
  mass: number = 0;
  height: number = 0;
  bmi: boolean | undefined;
  calculateBMI(): number {
    return this.mass / (this.height*this.height);
  } 
}

import { Component } from '@angular/core';
import { MyService } from './myservice.service';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters: Character[] = [];
  constructor(myservice: MyService) {
    this.characters = myservice.fetch();
  }

  isVisible = true;
  toggle(): void {
    this.isVisible = !this.isVisible;
  }
  locale = '';
  from = 0;
  to = 0;

  done(event: string): void {
    console.log(event)
    alert(event);
  }
}

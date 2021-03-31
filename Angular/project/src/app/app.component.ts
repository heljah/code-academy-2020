import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import { MyService } from './myservice.service';
import { Character } from './character';

interface Result {
  count: number,
  next: string,
  previous: string,
  results: [Character]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  private http: HttpClient;
  characters: Character[] = [];

  constructor(http: HttpClient) {
    this.http = http;
    const observable: Observable<Result> = this.http.get<Result>('https://swapi.dev/api/people/');

    observable.subscribe((data) => this.characters = data.results);
  }

  /*   constructor(myservice: MyService) {
    this.characters = myservice.fetch();
  } */

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

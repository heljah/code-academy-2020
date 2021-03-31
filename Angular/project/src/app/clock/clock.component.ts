import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `{{time}}<br />`,
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {

  @Input() locale = '';
  id: any;

  time = new Date().toLocaleString();

  constructor() {
    console.log('constructor', this.locale);
  }
  ngOnInit(): void {
    console.log(this.locale);
    this.id = setInterval(() => this.tick(), 1000);
  }

  // tätä funktiota kutsutaan ilman arrow-syntaksia, se aiheuttaa this-ongelman, joka poistuu arrow-syntaksilla
  tick = (): void => {
    this.time = new Date().toLocaleString(this.locale);
    // console.log(this.time)

  }


  // This will be called when input changes. We can check if input
  // was incorrect and revert to EN. Also you can do logic if it was the
  // first time when input changed.
  ngOnChanges(changes: SimpleChanges): void {
    // First update, this is just get familiar with the changes argument
    // you could just remove also this away and use just the else part.
    if (changes.locale.firstChange) {
      console.log("First update, let's use en-UK always");
      this.locale = 'en-UK';
    } else {
      // second updates
      console.log(
        `After first update, let's check if ${this.locale} was correct`
      );
      try {
        new Date().toLocaleString(this.locale);
        console.log('it was correct');
      } catch (err) {
        console.log("it was invalid, let's revert to en-UK");
        this.locale = 'en-UK';
      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.id);
  }

}

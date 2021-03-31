import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() from = 0;
  @Input() to = 0;
  @Output() finished = new EventEmitter<string>();
  id: any;
  constructor() { }

  // jos tätä funktiota kutsutaan ilman arrow-syntaksia, se aiheuttaa this-ongelman
  ngOnInit(): void {
    this.id = setInterval(() => this.count(), 2000);
  }

  count(): void {
    for (let i = this.from; i < this.to + 1; i++) {
      console.log(this.from, this.to);
      console.log(i);      
    }
    this.finished.emit('countdown done')
    this.ngOnDestroy();
  }

  // This will be called when input changes.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.from.firstChange || changes.to.firstChange) {
      console.log("First change, doing nothing")
    } else {
      try {
        clearInterval(this.id);
        this.id = setInterval(() => this.count(), 2000);
      } catch (err) {
        console.log("Something went wrong, I'm sorry!");
      }
    }

  }

  ngOnDestroy(): void {
    clearInterval(this.id);
  }

}

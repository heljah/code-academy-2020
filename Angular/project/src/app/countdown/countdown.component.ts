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
  counting = 0;
  constructor() { }

  // jos tätä funktiota kutsutaan ilman arrow-syntaksia, se aiheuttaa this-ongelman
  ngOnInit(): void {
    this.id = setInterval(() => {
      if (this.counting < this.to) {
        this.count()
      } else {
        this.finished.emit('countdown done')
        this.ngOnDestroy();
      }
    }, 1000);
  }

  count(): void {
    this.counting++;
  }

/*   // This will be called when input changes.
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

  } */

  ngOnDestroy(): void {
    clearInterval(this.id);
  }

}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { CountdownComponent } from './countdown/countdown.component';
import { MyService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

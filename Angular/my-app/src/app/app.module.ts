import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations.component';
import { InfotextComponent } from './infotext/infotext.component';

@NgModule({
  declarations: [
    AppComponent, LocationsComponent, InfotextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

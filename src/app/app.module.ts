import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AudioManagerComponent} from './components/audio-manager/audio-manager.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [AppComponent, AudioManagerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterOutlet, AppRoutingModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AudioManagerComponent} from './components/audio-manager/audio-manager.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatTableModule} from "@angular/material/table";
import {AudioPlayerComponent} from './components/audio-player/audio-player.component';
import {NgxAudioPlayerMaterialModule} from "ngx-audio-player-material";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, AudioManagerComponent, AudioPlayerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterOutlet, AppRoutingModule, MatTableModule, NgxAudioPlayerMaterialModule, HttpClientModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

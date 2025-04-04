import {Component, Input, ViewChild} from '@angular/core';
import {NgxAudioPlayerMaterialComponent} from "ngx-audio-player-material/lib/ngx-audio-player-material.component";
import {AudioInfoInterface} from "../../interfaces/audio-info.interface";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  @Input() audioInfo?: AudioInfoInterface;

  @ViewChild('audioPlayer') audioPlayer!: NgxAudioPlayerMaterialComponent;
}

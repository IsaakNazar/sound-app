import {Component, OnInit} from '@angular/core';
import {AudioService} from "../../services/audio.service";
import {AudioInfoInterface} from "../../interfaces/audio-info.interface";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-audio-manager',
  templateUrl: './audio-manager.component.html',
  styleUrls: ['./audio-manager.component.scss']
})
export class AudioManagerComponent implements OnInit {
  displayedColumns: string[] = ['audio-position', 'audio-name', 'audio-filename'];
  dataSource$: Observable<AudioInfoInterface[]> = of([]);
  selectedAudio?: AudioInfoInterface;
  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.dataSource$ = this.audioService.getPlayList();
  }

  selectRow(audio: AudioInfoInterface): void {
    this.selectedAudio = audio;
  }
}

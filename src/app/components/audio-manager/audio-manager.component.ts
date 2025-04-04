import { Component, OnInit } from '@angular/core';
import {AudioInfoInterface} from "../../interfaces/audio-info.interface";

@Component({
  selector: 'app-audio-manager',
  templateUrl: './audio-manager.component.html',
  styleUrls: ['./audio-manager.component.scss']
})
export class AudioManagerComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-filename'];
  dataSource: AudioInfoInterface[] = [
    {
      id: 1,
      display_name: 'Name',
      file_name: 'File name',
      path: 'some/path'
    },
    {
      id: 2,
      display_name: 'Name2',
      file_name: 'File name2',
      path: 'some/path2'
    },
    {
      id: 3,
      display_name: 'Name3',
      file_name: 'File name3',
      path: 'some/path3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectRow(row: any) {
    console.log(row);
  }
}

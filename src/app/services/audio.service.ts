import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AudioInfoInterface} from "../interfaces/audio-info.interface";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  getPlayList(): Observable<AudioInfoInterface[]> {
    return this.http.get<AudioInfoInterface[]>('assets/json/data.json')
  }
}

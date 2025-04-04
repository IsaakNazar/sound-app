import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AudioManagerComponent} from "./components/audio-manager/audio-manager.component";


const routes: Routes = [{path: '', component: AudioManagerComponent}, {path: '**', redirectTo: ''}]

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}

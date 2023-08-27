import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzCharactersComponent } from './components/add-characters/characters.component';
import { FormsModule } from '@angular/forms';
import {v4} from 'uuid'


@NgModule({
  declarations: [
    DbzPageComponent,
    DbzListComponent,
    DbzCharactersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzPageComponent
  ]
})
export class DbzModule { }

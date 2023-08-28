import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DbzListComponent {
  @Input() //! para poder recibir propiedades de un componente padre se debe usar este input
  public characterList: Character[] = [{
    id: v4(),
    name: 'Trunks',
    power: 500
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

onDeleteCharacterList(id?:string):void{
    if(!id) return;
  this.onDelete.emit(id);
}

}
  
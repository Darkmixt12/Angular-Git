import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DbzListComponent {
  @Input() //! para poder recibir propiedades de un componente padre se debe usar este input
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 500
  }]

onDeleteCharacter(id:number):void{
  console.log(id)
}

}

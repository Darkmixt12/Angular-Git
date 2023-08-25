import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class DbzCharactersComponent {

  @Output() // poder guardar el objeto nuevo de personaje y poder
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();// emitter es un generico y los genericos podemos especificar el tipo de dato que fluje atravez de este objeto

  public character: Character = {
    name: "",
    power: 0
  };

  addCharacter(): void {
    if( this.character.name.length === 0 )return;
    this.onNewCharacter.emit(this.character)

    this.character.name = "";
    this.character.power = 0;
  };
}

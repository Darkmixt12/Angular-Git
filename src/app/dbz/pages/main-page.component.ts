import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class DbzPageComponent implements OnInit {

    public characters: Character[] = [{
        id: v4(),
        name : "Krillin",
        power : 500,
    },{
        id: v4(),
        name: "Goku",
        power: 9600,
    },{
        id: v4(),
        name: "Vegeta",
        power: 7500,
    } ];


    ngOnInit(){}

    onNewCharacter1( character: Character):void{

        const newCharacter: Character = {
          id: v4(), ...character}

        this.characters.push(newCharacter);
    }

}

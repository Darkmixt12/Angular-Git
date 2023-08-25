import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class DbzPageComponent implements OnInit {

    public characters: Character[] = [{
        name : "Krillin",
        power : 500,
    },{
        name: "Goku",
        power: 9600,
    },{
        name: "Vegeta",
        power: 7500,
    } ];



    ngOnInit(){}

    onNewCharacter1(character: Character):void{
        this.characters.push(character);
         
    } 

}
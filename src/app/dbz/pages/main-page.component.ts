import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class DbzPageComponent implements OnInit {


    constructor( private dbzService : DbzService){ // con esto toda la informacion utilizada en el servicio DBZSERVICE sera 
                                                // posible utilizarla en el Componente main page                             
    }

    get characters(): Character[] {
        return [...this.dbzService.characters]
    }

    DeleteCharacterById(id: string):void{
        this.dbzService.DeleteCharacterId(id)
    }

    addCharacter(character: Character) {
        this.dbzService.addCharacter(character)
    }
    ngOnInit(){}

}

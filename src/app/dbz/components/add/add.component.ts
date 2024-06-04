import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  noNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  }

emitCharacter(){

  //debugger;

  console.log(this.character);
  if (this.character.name.length === 0) return;
  this.noNewCharacter.emit(this.character)

  this.character={
    name:'',
    power: 0
  }

}

}

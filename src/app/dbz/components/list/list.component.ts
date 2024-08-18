import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() /* PAPA al HIJO */
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]


  @Output() /* HIJO emite PADRE  */
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string): void {
    // TODO: Emitir el Id del personaje
    console.log(id);
    this.onDelete.emit(id);
  }


}

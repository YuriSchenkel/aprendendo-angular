import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent {
  @Output() changedNumber = new EventEmitter<number>();

  changeNumber() {
    const newNumber = Math.floor(Math.random() * 100);
    this.changedNumber.emit(newNumber);
  }
}

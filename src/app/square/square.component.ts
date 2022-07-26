import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="value">{{ value }}</button>
    <button *ngIf="!value"></button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em; border: 2px solid black; border-radius: 15px; }'],
})
export class SquareComponent  {

  @Input() value?: "X" | "O";
  
}
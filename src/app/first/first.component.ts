import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color = 'yellow';
  two = 'two way';
  @Input() external;
  @Output() sendDataToDad = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeColor(couleur) {
    this.color = couleur;
  }
  sendData() {
    this.sendDataToDad.emit({
      'data': 'Blue'
    }) ;
  }

}

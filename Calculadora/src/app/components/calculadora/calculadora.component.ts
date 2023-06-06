import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  @Output() closePopup = new EventEmitter<void>();

  onCloseClick() {
    this.closePopup.emit();
  }

}




import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit{
  value = 0;
  valor1: number[] = [];
  valor2 = 0;


  ngOnInit(): void {
  }

  @Output() closePopup = new EventEmitter<void>();

  onCloseClick() {
    this.closePopup.emit();
  }

  SetValue(value: number){
    this.value = value;

    this.valor1.push(value)
    console.log('Value: ', this.valor1)
    document.getElementById("CampoValor")!.innerText =  `${this.valor1} `
  }

}




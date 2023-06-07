import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})

export class CalculadoraComponent implements OnInit{
  value: any = '';
  valorConcat: any = '';


  ngOnInit(): void {
  }

  @Output() closePopup = new EventEmitter<void>();

  onCloseClick() {
    this.closePopup.emit();
  }

  clean() {
    this.valorConcat = ''
    document.getElementById("CampoValor")!.innerText = '0'
  }

  SetValue(value: string){
    this.value = value;

    this.valorConcat += value
    document.getElementById("CampoValor")!.innerText = this.valorConcat

  } 

  calculo() {
    let valores: any[] = this.valorConcat.split(/[-+/x*]/)
    valores = valores.map(str => str.replace(',', '.'))
    valores = valores.map(number => parseFloat(number));
    var resultado: number = 0

    if (this.valorConcat.includes('+')) {
      console.log('Operação selecionada: Soma')
      console.log(valores)
      resultado = (valores[0] + valores[1])

    } else if (this.valorConcat.includes('-')) {
      console.log('Operação selecionada: Subtração');
      resultado = (valores[0] - valores[1])

    } else if (this.valorConcat.includes('x')) {
      console.log('Operação selecionada: Multiplicação');
      resultado = (valores[0] * valores[1])

    } else if (this.valorConcat.includes('/')) {
      console.log('Operação selecionada: Divisão');
      resultado = parseFloat((valores[0] / valores[1]).toFixed(4));

    } else {
      console.log('Operação inválida!')
    }

    document.getElementById("CampoValor")!.innerText = this.valorConcat + '=' + String(resultado).replace('.', ',')
    this.valorConcat = ''
  }

}


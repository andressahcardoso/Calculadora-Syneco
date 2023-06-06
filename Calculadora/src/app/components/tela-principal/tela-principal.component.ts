import { Component, OnInit, Input, OnChanges, SimpleChanges   } from '@angular/core';
// import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss'],
})

export class TelaPrincipalComponent implements OnInit {
 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible ? this.isPopupVisible = false : this.isPopupVisible = true
  }
}




import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-error',
  templateUrl: './dialogo-error.component.html',
  styleUrls: ['./dialogo-error.component.css']
})
export class DialogoErrorComponent implements OnInit {

  Mensaje:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string) { 
      this.Mensaje=data
    }

  ngOnInit(): void {
  }

}

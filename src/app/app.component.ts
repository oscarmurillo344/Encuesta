import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { DialogoErrorComponent } from './dialogo-error/dialogo-error.component';
import { Preguntas } from './Preguntas';
import { PreguntasService } from './preguntas.service';
import { Respuesta } from './Respuesta';
import { RespuestaRequest } from './RespuestaRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cuestionario';
  preguntas: Preguntas[];
  FormEncuesta:FormGroup;
  SeleccionRespuesta:RespuestaRequest[]=[];

  constructor(private __servicioPregunta:PreguntasService,
              public dialog: MatDialog){
    
  }
  ngOnInit(){
    this.__servicioPregunta.obtenerPreguntas().subscribe(data=>this.preguntas=data);
  }

  EnviarEncuesta():void{
    if(this.preguntas.filter((data:Preguntas)=>data.estado==false).length == 0){
      console.log(this.SeleccionRespuesta);
      console.log("enviado");
    }else{
      this.dialog.open(DialogoErrorComponent,{data:"Porfavor, seleccione al menos una respuesta de las preguntas"});

    }
  }
  GuardarRespuesta(event:any,respuesta:Respuesta,pregunta:Preguntas):void{
    var Seleccion = event.source.checked;
    if(Seleccion){
      this.preguntas.forEach((data:Preguntas)=>data.IdPregunta==pregunta.IdPregunta?data.estado=true:null)
      this.SeleccionRespuesta.push(new RespuestaRequest(0,respuesta.IdPregunta,respuesta.IdRespuesta))
    }else{
      this.SeleccionRespuesta = this.SeleccionRespuesta.filter((data:RespuestaRequest)=> data.IdPregunta!=respuesta.IdPregunta)
    }
  }
}

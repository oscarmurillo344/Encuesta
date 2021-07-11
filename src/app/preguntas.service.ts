import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Preguntas } from './Preguntas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

preguntas:Preguntas[] = [
  {
    IdPregunta: 1,
    Pregunta: "¿Cómo calificaría nuestra atención con respecto a sus necesidades?",
    respuestas: [
      {
          IdPregunta: 1,
          IdRespuesta: 1,
          DesRespuesta: "Buena"
      },
      {
          IdPregunta: 1,
          IdRespuesta: 2,
          DesRespuesta: "Regular"
      },
      {
          IdPregunta: 1,
          IdRespuesta: 3,
          DesRespuesta: "Mala"
      }
        ],
        estado : false
  },
  {
    IdPregunta: 2,
    Pregunta: "¿Cómo fue la atención para resolver sus dudas?",
    respuestas: [
        {
            IdPregunta: 2,
            IdRespuesta: 4,
            DesRespuesta: "Buena, pues contestaron al momento"
        }
    ],
    estado : false
},
{
    "IdPregunta": 3,
    "Pregunta": "En general, ¿qué tan satisfecho está con su solución?",
    "respuestas": [
        {
            "IdPregunta": 3,
            "IdRespuesta": 7,
            "DesRespuesta": "Altamente satisfecho"
        }
    ],
    estado : false
}
]

  constructor() { }

  obtenerPreguntas():Observable<Preguntas[]>{
    return of(this.preguntas)
  }
}

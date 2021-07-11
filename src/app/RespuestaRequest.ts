export class RespuestaRequest {

        IdReclamo: number;
        IdPregunta: number;
        IdRespuesta: number;

        constructor( IdReclamo: number,
        IdPregunta: number,
        IdRespuesta: number){
            this.IdReclamo=IdReclamo
            this.IdPregunta=IdPregunta
            this.IdRespuesta=IdRespuesta
        }
}
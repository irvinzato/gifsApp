import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    //Tambien funciona retorando solo "this._historial" pero de esta manera es mas seguro
    return [...this._historial]; 
  }

  buscarGifs( query: string ) {
    //Para insertar al inicio en lugar de al final
    this._historial.unshift( query );
    console.log(this._historial);
  }

}

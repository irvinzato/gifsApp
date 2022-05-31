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
    query = query.trim().toLowerCase();
    if( !this._historial.includes(query) ) { //includes me dira si existe en mi arreglo el valor que quiero meter
      //Para insertar al inicio en lugar de al final
      this._historial.unshift( query );
      //Esto cortara el arreglo, solo dejara tener 10
      this._historial = this._historial.splice(0,10);
    }
    console.log(this._historial);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from './../interface/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKeyGifs: string = 'O4DRR1r5NXqj6kixAqoG96d0RZZC4Zcz';
  private limitGifs: number = 15;
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() { 
    //Tambien funciona retorando solo "this._historial" pero de esta manera es mas seguro
    return [...this._historial]; 
  }

  constructor( private http: HttpClient ) {}

  buscarGifs( query: string ) {
    query = query.trim().toLowerCase();
    if( !this._historial.includes(query) ) { //includes me dira si existe en mi arreglo el valor que quiero meter
      //Para insertar al inicio en lugar de al final
      this._historial.unshift( query );
      //Esto cortara el arreglo, solo dejara tener 10
      this._historial = this._historial.splice(0,10);
    }
    
    this.http.get<SearchGifsResponse>( `https://api.giphy.com/v1/gifs/search?api_key=O4DRR1r5NXqj6kixAqoG96d0RZZC4Zcz&q=${query}&limit=${this.limitGifs} `)
    .subscribe( res => {
 
      this.resultados = res.data;

    });

  }

}

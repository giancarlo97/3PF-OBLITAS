import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(){
    return this.http.get('https://63603a09ca0fe3c21aaf1470.mockapi.io/usuario');
  }
}

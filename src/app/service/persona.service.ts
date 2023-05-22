import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Persona from '../model/persona.model';
import { PATH } from './helper';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private http : HttpClient) {}

    public getPersona() : Observable<Persona> { // el observable permite hacer las peticiones ascincronicas
      return this.http.get<Persona>( PATH + "/consultar/persona/1" );
    }
} 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Skill from '../model/skill.model';
import { PATH } from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor( private http : HttpClient) { }

    public getSkills() : Observable<Skill[]> { // el observable permite hacer las peticiones ascincronicas
      return this.http.get<Skill[]>( PATH + "/api/skill/obtener/skills" );
    }
  }


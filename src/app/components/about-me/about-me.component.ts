import { Component, OnInit} from '@angular/core';
import Persona from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  persona : Persona = new Persona('','','','',''); //inicializo la persona, puedo crear un componente vacio para que no quede feo?? probar

  constructor(public personaService : PersonaService) {}
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data
                                                        console.log(data)}); //subcribe: detecta si el observable cambio
  }


}

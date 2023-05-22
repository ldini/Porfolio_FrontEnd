import { Component } from '@angular/core';
import Skill from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills : Array<Skill> = new Array; //inicializo la persona, puedo crear un componente vacio para que no quede feo?? probar

  constructor(public skillService : SkillService) {}
  
  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => {this.skills = data
                                                        console.log(data)}); //subcribe: detecta si el observable cambio
  }

}

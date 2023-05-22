import { Component, Input } from '@angular/core';
import Skill from 'src/app/model/skill.model';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.css']
})
export class CircularProgressComponent {
  @Input() skill: Skill = new Skill('',0,0); // Entrada para el progreso (0 - 100)

  public radius: number = 50; // Radio del círculo
  public circumference: number = 2 * Math.PI * this.radius; // Circunferencia del círculo
  public offset: number = 0; // Desplazamiento del trazo del círculo

  ngOnChanges(): void {
    this.updateProgress();
  }

  private updateProgress(): void {
    const normalizedProgress = Math.max(0, Math.min(this.skill.porcentaje, 100)); // Asegurar que el progreso esté entre 0 y 100
    this.offset = this.circumference - (normalizedProgress / 100) * this.circumference;
  }
}

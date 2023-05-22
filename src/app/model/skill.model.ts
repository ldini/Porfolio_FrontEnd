class Skill {
    id? :number;
    nombre : String;
    porcentaje : number;
    id_persona : number;

    constructor(nombre:String,porcentaje:number,id_persona:number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.id_persona = id_persona;
    }

}

export default Skill;


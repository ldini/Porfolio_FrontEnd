class Persona {
    id? :number;
    nombre : String;
    apellido : String;
    about_me : String;
    email : String;
    fecha_nacimiento : String;


    constructor(nombre:String,apellido:String,about_me:String,email:String,fecha_nacimiento:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.about_me = about_me;
        this.email = email;
        this.fecha_nacimiento = fecha_nacimiento;

    }
}

export default Persona;
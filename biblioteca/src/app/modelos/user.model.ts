export class User{
    constructor(
        public _id: String,
        public carne: String,
        public email: String,
        public usuario: String,
        public nombre: String,
        public apellido: String,
        public rol: String,
        public password: String,
        public historial: [{
          libro: String
        }],
        public prestados: [{
          libro: String
        }],
        public getToken: String
    ){}
}

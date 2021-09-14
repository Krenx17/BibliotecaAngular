export class Book{
    constructor(
        public _id: String,
        public tipo: String,
        public autor: String,
        public frecuencia: String,
        public titulo: String,
        public edicion: String,
        public palabrasclave: String,
        public descripcion: String,
        public temas: String,
        public copias: Number 
    ){}
}
// Libros.js
const mongoose = require('mongoose');  

const LibroSchema = new mongoose.Schema({
    nombre: { type: String, required: true, index: true },
    autor: { type: String, required: true },
    edicion: { type: String, required: true },
    editorial: { type: String, required: true },
    genero: { type: String, required: true },
    numeroDePaginas: {type: Number, required: true},
    idioma: { type: String, enum: ['español', 'ingles'], },
    stock: {type : Number},
    tipoDePasta: { type: String, enum: ['blanda', 'dura'] },
    isbn:{
        type:String,
        required: [true, "no puede estar vacío"],
        match: [/^(97(8|9))?\d{9}(\d|X)$/, "Es invalido"],
        index: true,
    },
    sinopsis: String,
    estadoDelLibro: { type: String, enum: ['nuevo', 'usado']},
    descripcion: String,
    comentario:[String],
    precio: {
        type: Number,
        required: [true, "no puede estar vacío"]
    },
    foto: String
},
{ timestamps: true }
);


/**
* Devuelve la representación de un libro
*/
LibroSchema.methods.publicData = function(){
    return {
    id: this.id,
    nombre: this.nombre,
    autor: this.autor,
    edicion: this.edicion,
    editorial:this.editorial,
    genero:this.genero,
    numeroDePaginas:this.numeroDePaginas,
    idioma: this.idioma,
    stock:this.stock,
    tipoDePasta: this.tipoDePasta,
    isbn: this.isbn,
    sinopsis: this.sinopsis,
    estadoDelLibro: this.estadoDelLibro,
    descripcion: this.descripcion,
    comentario: this.comentario,
    precio: this.precio,
    foto: this.foto
    };
};


mongoose.model("Libro", LibroSchema); 
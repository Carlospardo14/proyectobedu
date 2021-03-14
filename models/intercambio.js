// Intercambio.js
const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const IntercambioSchema = new mongoose.Schema({
    usuario1: { type: Schema.Types.ObjectId, ref: 'Usuario'},
    usuario2: { type: Schema.Types.ObjectId, ref: 'Usuario'},
    libro1: { type: Schema.Types.ObjectId, ref: 'Libro'},
    libro2: { type: Schema.Types.ObjectId, ref: 'Libro'},
    status1: Boolean,
    status2: Boolean,
    puntoMedio: String,
    statusGeneral: Boolean
})

IntercambioSchema.methods.publicData = function(){
    return{
        id: this.id,
        usuario1: this.usuario1,
        usuario2: this.usuario2,
        libro1: this.libro1,
        libro2: this.libro2,
        puntoMedio: this.puntoMedio,
        statusgeneral: this.statusGeneral
    }
}

mongoose.model("Intercambio", IntercambioSchema); 
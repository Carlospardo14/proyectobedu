const mongoose = require("mongoose")
const Libro = mongoose.model('Libro')

function crearLibro(req, res, next){
    const libro = new Libro(req.body)
    libro.save().then(libro =>{
        return res.json(libro.publicData());
    }).catch(next)
}

function obtenerLibro(req, res, next){
    if(req.params.id){
        Libro.findById(req.params.id).then( libro =>{
            res.send(libro)
        }).catch(next)
    }else {
        Libro.find().then(libro =>{
            res.send(libro)
        }).catch(next)
    }        
}

function modificarLibro(req, res, next){
    console.log(req.params.id)
    Libro.findById(req.params.id).then( libro =>{
        if (!libro) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.nombre !== 'undefined')
        libro.nombre = nuevaInfo.nombre
        if (typeof nuevaInfo.editorial !== 'undefined')
        libro.editorial = nuevaInfo.editorial
        if (typeof nuevaInfo.edicion !== 'undefined')
        libro.edicion = nuevaInfo.edicion
        if (typeof nuevaInfo.genero !== 'undefined')
        libro.genero = nuevaInfo.genero
        if (typeof nuevaInfo.numeroDePaginas !== 'undefined')
        libro.numeroDePaginas = nuevaInfo.numeroDePaginas
        if (typeof nuevaInfo.idioma !== 'undefined')
        libro.idioma = nuevaInfo.idioma
        if (typeof nuevaInfo.stock !== 'undefined')
        libro.stock = nuevaInfo.stock
        if (typeof nuevaInfo.tipoDePasta !== 'undefined')
        libro.tipoDePasta = nuevaInfo.tipoDePasta
        if (typeof nuevaInfo.isbn !== 'undefined')
        libro.isbn = nuevaInfo.isbn
        if (typeof nuevaInfo.sinopsis !== 'undefined')
        libro.sinopsis = nuevaInfo.sinopsis
        if (typeof nuevaInfo.estadoDelLibro !== 'undefined')
        libro.estadoDelLibro = nuevaInfo.estadoDelLibro
        if (typeof nuevaInfo.descripcion !== 'undefined')
        libro.descripcion = nuevaInfo.descripcion
        if (typeof nuevaInfo.comentario !== 'undefined')
        libro.comentario = nuevaInfo.comentario
        if (typeof nuevaInfo.precio !== 'undefined')
        libro.precio = nuevaInfo.precio
        if (typeof nuevaInfo.foto !== 'undefined')
        libro.foto = nuevaInfo.foto
        libro.save().then( updateLibro=>{
            res.status(201).json(updateLibro.publicData());
        }).catch(next)
    }).catch(next)
}

module.exports = {
    crearLibro,
    obtenerLibro,
    modificarLibro
  }
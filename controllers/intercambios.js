const mongoose = require("mongoose")
const Intercambio = mongoose.model('Intercambio')

function crearIntercambio(req, res, next){
    var intercambio = new Intercambio(req.body)
    intercambio.save().then( intercambio =>{
        return res.json(intercambio.publicData());
    }).catch(next)
}

function modificarIntercambio(req, res, next){
    Intercambio.findById(req.params.id).then(intercambio => {
        if (!intercambio) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.usuario1 !== 'undefined')
        intercambio.usuario1 = nuevaInfo.usuario1
        if (typeof nuevaInfo.usuario2 !== 'undefined')
        intercambio.usuario2 = nuevaInfo.usuario2
        if (typeof nuevaInfo.libro1 !== 'undefined')
        intercambio.libro1 = nuevaInfo.libro1
        if (typeof nuevaInfo.libro2 !== 'undefined')
        intercambio.libro2 = nuevaInfo.libro2
        if (typeof nuevaInfo.status1 !== 'undefined')
        intercambio.status1 = nuevaInfo.status1
        if (typeof nuevaInfo.status2 !== 'undefined')
        intercambio.status2 = nuevaInfo.status2
        if (typeof nuevaInfo.puntoMedio !== 'undefined')
        intercambio.puntoMedio = nuevaInfo.puntoMedio
        intercambio.statusGeneral = nuevaInfo.status1 && nuevaInfo.status2
        intercambio.save().then( updateIntercambio =>{
            res.status(201).json(updateIntercambio.publicData());
        }
        ).catch(next)
    }).catch(next)
}

function obtenerIntercambios(req, res, next){
    if(req.params.id){
        Intercambio.findById(req.params.id)
                .populate('usuario1', 'nombre apellido direccion foto')
                .populate('usuario2', 'username nombre apellido direccion foto')
                .populate('libro1', 'nombre autor')
                .populate('libro2', 'nombre autor')
                .then(libro => {
            res.send(libro)
          }).catch(next)   
    }else{
        Intercambio.find().then(intercambio =>{
            res.send(intercambio)
        }).catch(next)
    }
}

module.exports = {
    crearIntercambio,
    obtenerIntercambios,
    modificarIntercambio
  }
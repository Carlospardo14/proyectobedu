const router = require('express').Router();

const {
    crearLibro,
    modificarLibro,
    obtenerLibro
} = require("../controllers/libros")

var auth = require("./auth")

router.post('/', auth.requerido, crearLibro);
router.get('/', auth.opcional, obtenerLibro);
router.get('/:id', auth.opcional, obtenerLibro);
router.put('/:id', auth.requerido, modificarLibro);


module.exports = router;
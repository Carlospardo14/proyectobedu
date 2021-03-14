
const router = require("express").Router();

const {
    crearIntercambio,
    modificarIntercambio,
    obtenerIntercambios
} = require("../controllers/intercambios")

var auth = require("./auth")

router.get('/', auth.requerido, obtenerIntercambios);
router.get('/:id', auth.requerido, obtenerIntercambios);
router.post('/', auth.requerido, crearIntercambio);
router.put('/:id', auth.requerido, modificarIntercambio);

module.exports = router; 
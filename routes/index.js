var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('BookCrossing API');
});

router.use('/usuarios', require('./usuarios'));
router.use('/libros', require('./libros'));
router.use('/intercambios', require('./intercambios'));
// router.use('/api-docs', require('./api-doc'));
// exportamos nuestro nuevo router
module.exports = router;
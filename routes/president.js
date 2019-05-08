const express           = require('express');
const router            = express.Router();

const { index, getById, getByNumber, getByName, create, update, destroy, seedDB } = require('./../controllers/president-controller')

router.get('/', index);
router.get('/:id', getById);
router.get('/number/:number', getByNumber);
router.get('/name/:name', getByName);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/seed', seedDB);

module.exports = router;
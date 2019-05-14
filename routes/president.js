const express           = require('express');
const router            = express.Router();

const { index, getById, getByNumber, getByName, getByParty, getByTerms, getByState, getByDeath, create, update, destroy, seedDB } = require('./../controllers/president-controller')

router.get('/', index);
router.get('/:id', getById);
router.get('/number/:number', getByNumber);
router.get('/name/:name', getByName);
router.get('/party/:party', getByParty);
router.get('/terms/:terms', getByTerms);
router.get('/state/:state', getByState);
router.get('/death/:death', getByDeath);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/seed', seedDB);

module.exports = router;
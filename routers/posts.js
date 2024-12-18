const express = require('express');
const router = express.Router();

//index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})
//show
router.get('/:id', (req, res) => {
    res.send(`Mostra post a id ${req.params.id}`)
})
//store
router.post('/', (req, res) => {
    res.send('Aggiungi post')
})
//update
router.put('/:id', (req, res) => {
    res.send(`Modifica intero post con id ${req.params.id}`)
})
//modify
router.patch('/:id', (req, res) => {
    res.send(`Aggiorna post con id ${req.params.id}`)
})
//destroy
router.delete('/:id', (req, res) => {
    res.send(`Cancella post con id ${req.params.id}`)
})

module.exports = router;
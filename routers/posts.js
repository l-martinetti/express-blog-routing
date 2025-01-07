const express = require('express');
const router = express.Router();

const posts = require('../posts')

//index
router.get('/', (req, res) => {
    res.json(posts)
})
//show
router.get('/:slug', (req, res) => {
    const slug = req.params.slug;
    const post = posts.find( post => post.slug === slug);
    
    res.json(post)
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
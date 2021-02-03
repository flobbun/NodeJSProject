const express = require('express');
const router = express.Router();

const globalVars = {
    title: 'Brutal Phones',
    webdev: 'Jhon Aguiar',
    date: '2020'
}

router.get('/', (req, res) => {
    res.render('index.html', globalVars);
});
router.get('/home', (req, res) => {
    res.render('index.html', globalVars);
});

router.get('/contact', (req, res) => {
    res.render('contact.html', globalVars);
});

router.get('/products', (req, res) => {
    res.render('products.html', globalVars);
});

router.get('/about', (req, res) => {
    res.render('about.html', globalVars);
});

module.exports = router;
const express = require('express');
const path = require('path');
const fs = require('fs');
const bp = require('body-parser');
const serv = express();

// middleware logger.
serv.use((req, res, next) => {
    fs.appendFileSync('log.txt',`${req.url} : ${Date()}\n`);
    next();
});

serv.use(bp.urlencoded({extended: false}));

serv.post('/contact-form', (req, res) => {
    let submission = {
        name: req.body.name,
        email: req.body.email,
    }
    fs.appendFileSync('accounts.json', (JSON.stringify(submission) + ',\n'));
    res.send('Thanks for your submisson.');
});

// serv.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// })
serv.use(express.static(path.join(__dirname, '../public')));

serv.get('/formsubmissions', (req, res) => {
    res.send(submissions.html);
})

serv.listen(3000);
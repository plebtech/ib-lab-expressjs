const express = require('express');
const path = require('path');
const fs = require('fs');
const serv = express();

// middleware logger.
serv.use((req, res, next) => {
    fs.appendFileSync('log.txt',`${req.url} : ${Date()}\n`);
    next();
});

// serv.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// })
serv.use(express.static(path.join(__dirname, '../public')));

serv.listen(3000);
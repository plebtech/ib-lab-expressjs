const express = require('express');
const path = require('path');
const serv = express();

// serv.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// })
serv.use(express.static(path.join(__dirname, '.../public')));

serv.listen(3000);
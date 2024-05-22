const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const hostname = '127.0.0.1';
const port = process.env.PORT ||8080;
const { dynamicTextSelector } = require('./src/dynamicText');

const viewsPath = path.join(__dirname, './views');
app.use(express.static(__dirname + '/images'));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.get('/', (req, res) => {
  res.render('landingPage', { message: dynamicTextSelector });
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;
const { dynamicTextSelector } = require('./src/dynamicText');

const viewsPath = path.join(__dirname, './views');
app.use(express.static(__dirname + '/images'));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.get('/', (req, res) => {
  res.render('landingPage', { message: dynamicTextSelector });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.listen(3200, function () {
  console.log('running node server!');
});

app.get('/', function (req, res, err) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const express = require('express');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const path = require('path');
app.use('/static', express.static(path.join(__dirname, '../browser/static')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../browser/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(process.env.PORT || 1337, () => {
    console.log('The server is totally listening, dude!');
});

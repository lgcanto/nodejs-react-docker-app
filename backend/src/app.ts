import express = require('express');

const app: express.Application = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
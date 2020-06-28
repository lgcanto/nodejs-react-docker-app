var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World! (Testing Heroku CD)');
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
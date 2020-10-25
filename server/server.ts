import express = require('express');

// Create a new express app instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App is now listening asdf on port 3000!');
});

// now the server startedasfs s fsf sd 
// this is test this is test adfasdf dsf sdf sdaf dsfa sfas asdfasfs
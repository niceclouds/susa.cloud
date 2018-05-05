const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/_batfish_site'));

app.use(function(req, res, next) {
  res.status(404).redirect('/404.html');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
      message: err.message,
      error: {}
    }});
});

const server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});

var express = require('express');
var bodyParser = require('body-parser');

//Configuration ================================================================

var app = express();
var port = process.env.PORT || 8080;

//configure app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Routes for API ===============================================================

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

app.listen(port);
console.log('Server listening on port', port);

var express = require('express');
var bodyParser = require('body-parser');

//Configuration ================================================================

var app = express();
var port = 8080;

//configure app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Routes for API ===============================================================

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/font-awesome', express.static(__dirname + '/public/font-awesome'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port);
console.log('Server listening on port', port);

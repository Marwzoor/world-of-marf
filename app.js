var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', 'views');

app.get('/', function (req, res) {
    return res.render('index');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
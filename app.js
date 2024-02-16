var http = require('http');
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));
require('./app/routes')(app);
let port = app.get('port');

http.createServer(app).listen(port, function(){
	console.log(`Server listening on port http://localhost:${port} and app version is ${process.env.npm_package_version}`);
});

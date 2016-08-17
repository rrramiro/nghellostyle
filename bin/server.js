"use strict";
var port = process.argv[2]
const connect = require('connect');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');
const app = connect();
if(!port){
	port = 8000 
}
app.use(serveStatic('app'));
app.use(serveIndex('app'));
app.listen(port);
console.log(process.pid);
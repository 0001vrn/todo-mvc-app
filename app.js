var express = require('express');

var todoController = require('./controllers/todoController');
var app = express();

//setup template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire Controllers
todoController(app);

//listen to port
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
console.log("Server running on port 3000");
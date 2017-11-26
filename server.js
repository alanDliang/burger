var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({
  extended: false
}))

var handleB = require('express-handlebars');
app.engine('handlebars', handleB({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on %s", PORT);
});
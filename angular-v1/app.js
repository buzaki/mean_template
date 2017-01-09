var express = require('express');
var bodyParser = require('body-parser');
var port = 80;
var app = express();

// view engine setup
//app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

// middelwear configure
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'application/json'}));

app.get('*', function(req , res){
  res.sendfile('./public/index.html');
})




app.listen(port);
console.log('Server is listening on port ' + port)

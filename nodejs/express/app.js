var express = require('express');
var app = express();


// reply with static text
app.get('/', function(req, res){
    res.send('Welcome to home page')
})


// reply with json data
app.get('/api', function(req, res){
    res.json({
        name: "Zaki",
        job: 'admin'
    })
})


// req.params is array carry all link vars

// reply with url var based index.php?id=xx
app.get('/name/:id', function(req, res){
    res.send('your id is  ' + req.params.id + '  bro');
})



app.listen(2020);

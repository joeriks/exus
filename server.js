var sys = require('util');
var rest = require('restler'); // npm get restler
var express = require('express'); // npm get express
// npm get jade

// umbraco 6* with the package Tapas installed

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/Views');
  app.set('view engine', 'jade');
});
 
app.get('/*', function (req, res) {         
         
    rest.get(req.protocol + "://" + req.get('host') + '/umbraco/publishedcontent/node/getNode?path=' + req.url)
    .on('complete', function(data) {        
        res.render(data.Template, data);
    });
     
});
 
app.listen(app.get('port'));
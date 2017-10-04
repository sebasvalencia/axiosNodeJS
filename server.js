var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());

var telefonos= [
    {
        nombre:"iphone",
        precio:500
    },
    {
        nombre:"android",
        precio:600
    }
];

//GET
app.get('/telefonos', function(req,res){
    res.send(telefonos);
});

//PUT
app.put('/telefonos/:nombre', function(req,res){
    var indice = telefonos.findIndex(function(elemento){
       return elemento.nombre == req.params.nombre; 
    });
    telefonos[indice] = req.body;
    res.sendStatus(200);
});

app.listen(3000, function(){
    console.log("App escuchando en el puerto 3000");
})






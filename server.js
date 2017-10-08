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
app.get('/telefonos/telefono', function(req, res){
    var nombre = req.query.nombre;
console.log("nombre",nombre);
   var tel = telefonos.map((telefono)=>{
        if(nombre === telefono.nombre){
            return telefono;
        }
    });

    res.send(tel);
});



//GET
app.get('/telefonos', function(req,res){
    console.log("telefonos");
    res.send(telefonos);
});

//POST
app.post('/telefonos/insert', function(req, res){
    telefonos.push(req.body.data);
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






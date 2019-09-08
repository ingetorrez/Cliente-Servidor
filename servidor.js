var express = require("express");
var app = express();

app.get('/',Inicio);
app.get('/Acerca', Acerca);

function Inicio(req,res){
    res.send("Bienvenido a promo.com");
}

function Acerca(req,res){
    res.send("Somos Promo");
}

app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
});

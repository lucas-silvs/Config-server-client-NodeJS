//lib dotenv utilizada para mapear as configs no nodeJs
//os campos devem ser em não deve ser utilizado '.' para  
require("dotenv").config()

var express = require ('express'); 
var app = express();
app.get('/', function (req, res) {
    //captura campo chamado CAMPO_TESTE que foi recebido do config--server e convertido para o .env
    res.send(process.env.CAMPO_TESTE);
});
app.listen(3000, function() {
    // o javascript enxerga as propriedades do arquivo .env como variaveis de ambiente
console.log("Server iniciado e escutando na porta "+process.env.SERVER_PORT)

//campos estilo yaml podem ser capturados com o exemplo abaixo
console.log(process.env["spring.datasource.url"])
console.log(process.env["spring.datasource.username"])
});





//lib dotenv utilizada para mapear as configs no nodeJs
//os campos devem ser em não deve ser utilizado '.' para  
require("dotenv").config()

// o javascript enxerga as propriedades do arquivo .env como variaveis de ambiente
console.log(process.env.SERVER_PORT)
console.log(process.env.CAMPO_TESTE)

//campos estilo yaml podem ser capturados com o exemplo abaixo
console.log(process.env["spring.datasource.url"])

console.log(process.env["spring.datasource.username"])


//lib dotenv utilizada para mapear as configs no nodeJs
//os campos devem ser em não deve ser utilizado '.' para  
require("dotenv").config()

// o javascript enxerga as propriedades do arquivo .env como variaveis de ambiente
console.log(process.env.SERVER_PORT)



//pega o nome da aplicação no arquivo package.json
const package = require('./package.json')

const client = require("cloud-config-client");
const fs = require('fs');

//passa os parametros para solicitar as configurações no config server
client.load({
    name: package.name, //nome da aplicação
    profiles: [process.env.NODE_ENV], // perfil da configuração (dev, hml, prd) 
    endpoint: "http://localhost:8888", //URI do Config-Server
    auth: { user: "developer", pass: "dummypassword" } //autenticação da aplicação
}).then((config) => {

    console.log(package.name)

    //utilizando arquivo de configuração dotenv
    let listaConfig = []
    config.forEach((chave, valor) => listaConfig.push(`${chave}=${valor}\n`))
    listaConfig = listaConfig.toString().replace(/,/g, "")
    try {
        //ao receber os dados do config--server, o yaml é convertido para .env
        fs.writeFileSync('./.env', listaConfig);
    } catch (err) {
        console.error(err);
    }

})
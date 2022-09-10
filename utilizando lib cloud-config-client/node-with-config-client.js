
const client = require("cloud-config-client");

const fs = require('fs');

// uma das formar de carrega os dados do config-server


var nomeServico;
client.load({
    name: "service--teste", //nome da aplicação
    profiles: ['dev'], // spring profiles 
    endpoint: "http://localhost:8888", //URI do Config-Server
    auth: { user: "developer", pass: "dummypassword" },
}).then((config) => {

    //utilizando o for each para pegar todas as configurações e printa-las
    let listaConfig = [] 
    config.forEach((chave, valor) => listaConfig.push(`${chave}=${valor}\n`))
    listaConfig = listaConfig.toString().replace(/,/g, "")
    try {
        fs.writeFileSync('./.env',listaConfig);
        // file written successfully
    } catch (err) {
        console.error(err);
    }



    //config.forEach((chave, valor) => yaml.writeSync("config.yaml",String(chave) + ": " + String(valor)))
    //config.forEach((chave, valor) => console.log(String(chave) + ": " + String(valor)))

})



// const config =  client.load({
//     name: "service--teste", //nome da aplicação
//     profiles:['dev'], // spring profiles 
//     endpoint: "http://localhost:8888", //URI do Config-Server
//     auth: {user: "developer", pass: "dummypassword"}
// })
// const value2 = config.get("service.name");
// console.log("teste outro tipo: " + String(value2))
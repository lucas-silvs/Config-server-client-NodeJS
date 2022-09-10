const client = require("cloud-config-client");

// uma das formar de carrega os dados do config-server


var nomeServico;
client.load({
    name: "service--teste", //nome da aplicação
    profiles:['dev'], // spring profiles 
    endpoint: "http://localhost:8888", //URI do Config-Server
    auth: {user: "developer", pass: "dummypassword"},
    context: process.env
}).then((config) => {
    configLocal = config
    // Look for a key
    nomeServico = config.get("service.name");
    console.log("const value1 = config.get(\"service.name\");: " + String(nomeServico))

    // Using a prefix, this is equivalent to .get("this.is.another.key");
    const value2 = config.get("service", "version")
    console.log("const value2 = config.get(\"service\", \"version\");: " + String(value2))
});


// Or

// const config =  client.load({
//     name: "service--teste", //nome da aplicação
//     profiles:['dev'], // spring profiles 
//     endpoint: "http://localhost:8888", //URI do Config-Server
//     auth: {user: "developer", pass: "dummypassword"}
// })
// const value2 = config.get("service.name");
// console.log("teste outro tipo: " + String(value2))
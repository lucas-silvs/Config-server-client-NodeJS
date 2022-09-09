const client = require("cloud-config-client");
client.load({
    name: "service--teste", //nome da aplicação
    profiles:['dev'], // spring profiles 
    endpoint: "http://localhost:8888"
}).then((config) => {
    // Look for a key
    const value1 = config.get("service.name");
    console.log("const value1 = config.get(\"service.name\");: " + String(value1))

    // Using a prefix, this is equivalent to .get("this.is.another.key");
    const value2 = config.get("service", "version")
    console.log("const value2 = config.get(\"service\", \"version\");: " + String(value2))

});

// Or

// const config = await client.load({ application: 'service--teste' })
// const value2 = config.get("service.name");
// console.log("teste outro tipo: " + value2)n
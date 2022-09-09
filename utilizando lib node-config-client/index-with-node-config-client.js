let configClient = require('node-config-client');

configClient.load({
	name:'service--teste', // spring application name
	profiles:['dev'], // spring profiles    
	label:'master', // git branch
	location:'localhost:8888', // spring cloud server address

}).then(config => {
  // getting configuration
	console.log(`nome do serviço carregado do config-server: ${config.get('service.name')}`);

}).catch(erro => console.log(erro))
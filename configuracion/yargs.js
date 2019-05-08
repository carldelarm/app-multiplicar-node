'use strict'

const opts = {
	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
};

const argv = require('yargs')
			.command('listar','Imprime en la consola la tabla de multiplicar',opts)
			.command('crear','Crear en un fichero .txt la tabla de multiplicar',opts)
			.help()
			.argv;

module.exports = {
	argv	
}

'use strict'

const colors = require('colors');

//Forma #1:
const argv = require('./configuracion/yargs').argv;
//Forma #2: 
//const { argv } = require('./configuracion/yargs');

const { crearArchivo, listarTabla } = require('./modelo/multiplicar');

//console.log(module);
//console.log(process.argv);

//Si quiero mostrar algunos de los valores de argv que me devuelve la libreria de yargs
//console.log('argv: base=',argv.base);
//console.log('argv: limite=',argv.limite);

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite);
		break;

	case 'crear':
		crearArchivo(argv.base,argv.limite)
		.then(archivo => console.log(`Archivo creado: ${archivo.green}....[OK]`))
		.catch(err=>console.log(err.red));
		break;

	default: console.log("Comando no reconocido, para ver la ayuda por favor ingrese: node app --help".green);
}



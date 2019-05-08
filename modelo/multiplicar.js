'use strict'

//Importa un módulo que provee una API que nos permite interactuar con el sistema de archivos
const fs = require('fs');
const colors = require('colors');

//Función para listar por consola las tablas de multiplicar de las base enviada como parametro
let listarTabla = (base, limite) => {

	if(!Number(base)){
		reject(`La base [${base}] ingresada NO es un número...!`);
		return;
	}

	if(!Number(limite)){
		reject(`El limite [${limite}] ingresado NO es un número...!`);
		return;
	}

	console.log("===========================================".red);
	console.log(`TABLA DE MULTIPLICAR DEL ${base}`.red);
	console.log("===========================================".red);
	let data = `` ;

	for (var i = 1; i <= limite; i++) {
		data += `${base} * ${i} = ${base * i}\n`;
	}

	console.log(data.green);
}


//Función para crear un archivo .txt con las tablas de multiplicar de la base enviada como parametro.
let crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {

		if(!Number(base)){
			reject(`La base [${base}] ingresada NO es un número...!`);
			return;
		}

		if(!Number(limite)){
			reject(`El limite [${limite}] ingresado NO es un número...!`);
			return;
		}

		let nombre_archivo = `tabla-${base}-al-${limite}.txt`;
		let data = `TABLA DE MULTIPLICAR DEL ${base}\n===============================\n` ;

		for (var i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`tablas-multiplicar/${nombre_archivo}`, data, (err) => {
		  if (err) reject(err);

		  else resolve(nombre_archivo);
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla	
}


/*import chalk from 'chalk';
//import { describe } from 'yargs';
import getNotes,{createNotes} from './notes.js';
import {modifyNotes} from './notes.js';
import {deleteNotes} from './notes.js';
*/
const notes = require ('./notes.js')
//const rnotes = require ('./notes.js')
const yargs = require ('yargs')
yargs.version("1.1.0")
//import yargs from 'yargs';
//import { hideBin } from 'yargs/helpers'

//Crear comando add
yargs.command(
    {
    command: 'add',
    describe: 'Add new note',
    builder:{ // Constructor, recibe dos argumentos: title y body,
        title :{
            describe: "Note title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){//Función que maneja el comando
            console.log("Hola")
            notes.addNote(argv.title,argv.body)
    }
    }
)
//Crear comando get
yargs.command(
    {
    command: 'get',
    describe: 'Get all notes',
    builder:{ // Constructor, recibe dos argumentos: title y body,

    },
    handler(argv){//Función que maneja el comando
            console.log("Contenido de archivo JSON")
            notes.getNotes()
    }
    }
)
yargs.parse()
/*
//const getNotes = require("./herramientas.js")
let mensaje = chalk.blue.bgRed.bold('Aplicación de Notas'); 
const resultado = getNotes()
console.log(resultado)

const resultado2 = createNotes()
console.log(resultado2)

const resultado3 = modifyNotes()
console.log(resultado3)

const resultado4 = deleteNotes()
console.log(resultado4)
*/
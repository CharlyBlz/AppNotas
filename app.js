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
            //console.log("Hola")
            notes.addNote(argv.title,argv.body)
    }
    }
)
//Crear comando read
yargs.command(
    {
    command: 'listNotes',
    describe: 'Get all notes',
    builder:{ // Constructor, recibe dos argumentos: title y body,

    },
    handler(){//Función que maneja el comando
            console.log("Contenido de archivo JSON")
            //notes.getNotes()
            notes.listNotes()
    }
    }
)
//Crear comando remove
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type:"String"
        }
    },
    // argv: le pasamos los argumentos por consola, en este caso: el título de la nota a borrar
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Crear comando read one note
yargs.command({
    command: "read one note",
    describe: "read one note",
    builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type:"String"
        }
    },
    handler(argv){
        notes.readOneNote(argv.title)
    }
})
//Crear comando modify note
yargs.command({
    command: "modify note",
    describe: "modifies one note at a time",
    builder: {
        title :{
            describe: "Note title to modify",
            demandOption: true,
            type:'string'
        },
        ntitle :{
            describe: "New note title",
            demandOption: true,
            type:'String'
        },
        nbody:{
            describe: "New note body",
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv){
            notes.modifyNote(argv.title,argv.ntitle, argv.nbody)
    }
})
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
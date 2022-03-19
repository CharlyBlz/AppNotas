const fs = require('fs')
const addNote = function(title,body){
    console.log("El título de la nota:", title)
    console.log("El cuerpo de la nota:", body)
    const notes = loadNotes()
    //Validar que nota no esté duplicada
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
        notes.push(
            {title:title,
            body:body}
        )
        // Guardar en el archivo
        saveNotes(notes)
        console.log("Notas creadas")        
    } else{
        console.log("Nota duplicada")
    }
}
const getNotes = function(){
    try{
    const readNotes = fs.readFileSync("notes.json")
    const notes = JSON.parse(readNotes)
    console.log(notes)
    }catch(err){
        console.log(err)
    }
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes= function() {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //devuelve lista llena
    } catch(e){
        return[] //devuelve lista vacía
    }
}
module.exports = {
    addNote:addNote,
    getNotes:getNotes
}


/*
export default function getNotes(){
    return "Tus notas..."
}
export function createNotes(title,body){
    console.log("Título de la nota",title)
    console.log("Cuerpo de la nota",body)
    return "Nota creada"
}
export function modifyNotes(){
    return "Nota modificada..."
}
export function deleteNotes(){
    return "Nota eliminada..."
}
//module.exports = getnotes
*/
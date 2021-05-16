const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body)=>{

    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if (!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.bold("New Note Added"))
    }
    else
        console.log(chalk.red.bold("Note title already taken"))
}

const removeNote = (title)=>
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title !== title)

    if(duplicateNotes.length === notes.length)
        console.log(chalk.red.bold("Note with this title doesnot exist!"))
    else{
        saveNotes(duplicateNotes)
        console.log(chalk.green.bold("Note Removed successfully!"))
    }

}

const listNotes = ()=>{
    console.log(chalk.redBright.inverse("Your notes"))
    const notes=loadNotes()
    notes.forEach(note => {
        console.log(chalk.cyanBright(note.title))
        // console.log(chalk.greenBright(note.body))
    })
}

const readNote = (title)=>{
    const notes = loadNotes()
    const requiredNote = notes.find((note) => note.title === title)
    if (requiredNote===undefined)
        console.log(chalk.red.bold("No note found!"))
    else
    {
        console.log(chalk.cyanBright(requiredNote.title))
        console.log(chalk.greenBright(requiredNote.body))
    }

}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes)=>{
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
}

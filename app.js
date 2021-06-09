const notes = require("./notes.js")

const yargs = require('yargs')


// Customise yargs extension
yargs.version('1.0.0')

//Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    //below handler is function and represented using ES6 property
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//Create List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()
    }
})
//Create Read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//To trigger the yargs so that it parses arguments.
yargs.parse()// To set above changes



import { getNotes, useNotes } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./Note.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")
// debugger

//listens for change in note form
eventHub.addEventListener("noteStateChanged", event => {
    if(contentTarget.innerHTML === "")NoteList()
    
})

//listens for Show Note clicked
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
    
})

        const render = (noteArray) => {
        const allNotesConvertedToStrings = noteArray.map(
        note => NoteHTMLConverter(note) ).join("")

     contentTarget.innerHTML = `<h2>Case Notes</h2><section class="noteEntry">${allNotesConvertedToStrings}</section>`
}
// debugger
// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}
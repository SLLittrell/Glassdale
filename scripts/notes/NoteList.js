import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./Note.js"
import {useCriminals, getCriminals} from '../criminals/CriminalDataProvider.js'

const render = (noteCollection, criminalCollection) => {
     const allNotesConvertedToStrings = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === parseInt(note.criminalId))
        return NoteHTMLConverter(note,relatedCriminal)
        
    }).join(" ") 
    
    contentTarget.innerHTML =`
    <h2>Case Notes</h2><section class="noteEntry">${allNotesConvertedToStrings}</section>
    `
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}

//Delete note Event listener
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       const DeleteNote = () => {
           deleteNote(id)
           .then(
               () => {
                   const updatedNotes = useNotes()
                   const criminals = useCriminals()
                   render(updatedNotes, criminals)
                }
                )
            }
            return DeleteNote()
        }
})

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
// const eventHub = document.querySelector(".container")
// debugger

//listens for change in note form
eventHub.addEventListener("noteStateChanged", event => {
    if(contentTarget.innerHTML === "")NoteList()
    
})

//listens for Show Note clicked
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()   
})

//         const render = (noteArray) => {
//         const allNotesConvertedToStrings = noteArray.map(
//         note => NoteHTMLConverter(note) ).join("")

//      contentTarget.innerHTML = `<h2>Case Notes</h2><section class="noteEntry">${allNotesConvertedToStrings}</section>`
// }
// debugger
// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
// export const NoteList = () => {
//     getNotes()
//         .then(() => {
//             const allNotes = useNotes()
//             render(allNotes)
//         })
// }
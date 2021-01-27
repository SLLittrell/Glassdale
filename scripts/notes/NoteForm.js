import {saveNote} from './NoteDataProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        Notes
        <form>
            <fieldset>
                <input type="text" id="note-text">
                <input type="date" id="note-date">
                <input type="text" id="note-suspect">
            </fieldset>
            <button id="saveNote">Save Note</button>
        </form>
    `
}

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        // console.log ("click happened")
    // debugger
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
                note: document.querySelector("#note-text").value,
                date:document.querySelector("#note-text").value,
                suspect:document.querySelector("#note-text").value
            }


        // Change API state and application state
        saveNote(newNote)
    }
})

// const NoteForm = () => {
//     // rest of the code here
// }

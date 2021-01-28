import {saveNote} from './NoteDataProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        Notes
        <form>
            <fieldset>
                <input class="date" type="date" id="note-date">
                <input class="suspect" type="text" id="note-suspect" value="Suspect">
                <textarea class="note" id="note-text">Note</textarea>
                <button class="savebtn" id="saveNote">Save Note</button>
            </fieldset>
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
                date:document.querySelector("#note-date").value,
                suspect:document.querySelector("#note-suspect").value
            }


        // Change API state and application state
        saveNote(newNote)
    }
})

// const NoteForm = () => {
//     // rest of the code here
// }

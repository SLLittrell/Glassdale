
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        Notes
        <form>
            <fieldset>
                <input type="text" id="note-text" value="Note">
                <input type="date" id="note-date">
                <input type="text" id="note-suspect" value="Suspect Name">
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

        // Make a new object representation of a note
        const newNote = new CustomEvent ( "noteSaved", {
            detail: {
                noteWasSaved: "saved"
            }

        })
            // Key/value pairs here

        // Change API state and application state
        eventHub.dispatchEvent(newNote)
    }
})

// const NoteForm = () => {
//     // rest of the code here
// }

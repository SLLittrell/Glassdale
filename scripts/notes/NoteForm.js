
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        Put some input fields and prompts here
        <form>
            <fieldset>
                <input type="text" id="note-text">
                <input type="text" id="note-date">
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

        // Make a new object representation of a note
        const newNote = new CustomEvent { "saveNote"
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    // rest of the code here
}

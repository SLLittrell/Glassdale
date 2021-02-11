import {saveNote} from './NoteDataProvider.js'
import {getCriminals, useCriminals} from '../criminals/CriminalDataProvider.js'


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
// debugger
const htmlRender = () => {
    getCriminals()
        .then(()=>{
            const criminalArray = useCriminals()
        contentTarget.innerHTML = `
        Notes
        <form>
            <fieldset>
                <input class="date" type="date" id="note-date">
                <input class="auther" type="text" id="note-auther" value="Auther">
                <textarea class="note" id="note-text">Note</textarea>
                <label for ="noteForm--criminal">Choose Suspect:</label> 
                <select id="noteForm--criminal" class="criminalSelect">
                ${ criminalArray.map(criminal => 
                    `<option value="${ criminal.id }">${ criminal.name }</option>` )}
                </select>
                <button class="savebtn" id="saveNote">Save Note</button>
            </fieldset>
        </form>
    ` 
    })
}

export const NoteForm = () => {
    htmlRender()
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
                auther:document.querySelector("#note-auther").value,
                criminalId: document.querySelector("#noteForm--criminal").value
            }


        // Change API state and application state
        saveNote(newNote)
    }
})



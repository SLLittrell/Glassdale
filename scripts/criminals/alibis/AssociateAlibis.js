
import { getCriminals, useCriminals } from "../CriminalDataProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".associatesContainer")

export const ShownAssociates = (criminalObj) => {
    const htmlRep = `<div id="alibi__modal" class="modal--parent">
    <div class="modal--content"><h3>${criminalObj.name}'s Associates</h3>
    ${ criminalObj.known_associates.map( associates => {
        return `
            <section class="associateContainer">
                <div class="associate__name ">Name: ${associates.name}</div>
                <div class="associate__alibi">Alibi: ${associates.alibi}</div>
            </section>`
        }).join ("")}
        
        <button id="modal--close">Close</button>
            </div>
        </div>
        `  
        contentTarget.innerHTML = htmlRep
    }
    
//listens for click on associate Alibi button
eventHub.addEventListener("chosenAlibi", customEvent => {
    //match clickevent listener id to criminal id
    
    
    const alibiArray = useCriminals()
    // debugger
    const criminalAlibi = alibiArray.find(alibiObj => {
        return alibiObj.id === parseInt(customEvent.detail.alibiThatWasChosen)
    })
    ShownAssociates(criminalAlibi)


})

eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentTarget.innerHTML = ""
}

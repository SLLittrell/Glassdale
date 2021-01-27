import { getOfficers, useOfficers } from "./OfficerDataProvider.js"


const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then( () => {
      // Get all convictions from application state
      const officerArray = useOfficers()
      render(officerArray)
    })
}


const render = officerCollection => {
    /*
    Use interpolation here to invoke the map() method on
    the officerCollection to generate the option elements.
    */
   contentTarget.innerHTML = `
   <select class="dropdown" id="officerSelect">
        <option value="0">Officers</option>
         ${
            officerCollection.map(officerObject => 
            `<option value="${officerObject.id}">${officerObject.name}</option>`) .join("")
            }
        </select>
    `
}



// export const Officer = (officerObj) => {
//     return `
//     <p class="officer>${officerObj.name}</p>
//     `
// 
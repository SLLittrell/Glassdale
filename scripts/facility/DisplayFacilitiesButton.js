const contentTarget= document.querySelector(".facility__button")

export const ShowFacilityButton = () => {
contentTarget.innerHTML = '<button id="facility--button">Facility List</button>'}



const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "facility--button") {
        clickEvent.preventDefault()
        console.log("click")
        // debugger
        const customEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

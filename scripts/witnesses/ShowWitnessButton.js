const contentTarget= document.querySelector(".witness__button")

export const ShowWitnessButton = () => {
contentTarget.innerHTML = '<button id="witness--button">Witness Statements</button>'}



const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witness--button") {
        clickEvent.preventDefault()
        console.log("click")
        // debugger
        const customEvent = new CustomEvent("showWitnessClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

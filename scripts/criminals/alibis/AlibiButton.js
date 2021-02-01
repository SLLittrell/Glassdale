export const AlibiButton = (criminalObj) => {
   return `<button id="associates--${criminalObj.id}">Associate Alibis</button>`
}






const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {

    if (event.target.id.startsWith("associates--")) {
        // Create custom event. Provide an appropriate name.
        const [prefix, chosenAlibi] = event.target.id.split("--")

        const customEvent = new CustomEvent("chosenAlibi", {
            detail: {
                alibiThatWasChosen: chosenAlibi
            }
        })
        // console.log("clicked")
// debugger
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

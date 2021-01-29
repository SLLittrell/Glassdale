export const Criminal = (criminalObj) => {
    return `
    <div class="criminalContainer">
        <p class="criminalName">${criminalObj.name}</p>
        <p class="criminalAge">Age: ${criminalObj.age}</p>
        <p class="criminalCrime">Crime: ${criminalObj.conviction}</p>
        <p class="criminalTermStart">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminalTermEnd">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </div>
    `
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {

    if (event.target.id.startsWith("associates--")) {
        // Create custom event. Provide an appropriate name.
        const [prefix, chosenAlibi] = event.target.id.split("--")

        const customEvent = new CustomEvent("chosenAlibi", {
            detail: {
                crimeThatWasChosen: chosenAlibi
            }
        })
        // console.log("clicked")
// debugger
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


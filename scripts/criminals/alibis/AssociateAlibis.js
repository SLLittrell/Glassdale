
import { getCriminals, useCriminals } from "../CriminalDataProvider.js";
import { Alibi } from "./Alibis.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dialog")

export const ShownAssociates = (criminalObj) => {
    const htmlHead = `<h3>${criminalObj.name}'s Associates and Alibi's</h3>`
    const alibiChosen = criminalObj.known_associates.map( associates => {
        const htmlRep =  `
        <section class="associate_container">
        <div>Name: ${associates.name}</div>
        <div>Alibi: ${associates.alibi}</div>
        </section>`
        return htmlRep
    })
    
    contentTarget.innerHTML = htmlHead + alibiChosen

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
    // console.log(criminalAlibi)
    // const alibiChosen = criminalAlibi.known_associates.map( associates => {
    //     const associateName =  `
    //     <h3>${criminalAlibi.name}'s Associates and Alibi's</h3>
    //     <section class="associate_container">
    //     <div>Name: ${associates.name}</div>
    //     <div>Alibi: ${associates.alibi}</div>
    //     </section>`
    //     return associateName
    // })
    
    // contentTarget.innerHTML = alibiChosen


})

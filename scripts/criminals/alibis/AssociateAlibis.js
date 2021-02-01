
import { getCriminals, useCriminals } from "../CriminalDataProvider.js";
import { Alibi } from "./Alibis.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dialog")

// export const ShownAssociates = (criminalObj) => {
//     console.log(criminalObj)
// }

//listens for click on associate Alibi button
eventHub.addEventListener("chosenAlibi", customEvent => {
    //match clickevent listener id to criminal id
    
    
    const alibiArray = useCriminals()
    // debugger
    const criminalAlibi = alibiArray.find(alibiObj => {
        return alibiObj.id === parseInt(customEvent.detail.alibiThatWasChosen)
    })
    // console.log(criminalAlibi)
    const alibiChosen = criminalAlibi.known_associates.map( associates => {
        const associateName =  `
        <h3>${criminalAlibi.name}'s Associates and Alibi's</h3>
        <section class="associate_container">
        <div>Name: ${associates.name}</div>
        <div>Alibi: ${associates.alibi}</div>
        </section>`
        return associateName
    })
    
    contentTarget.innerHTML = alibiChosen


            

            
            
            
            // contentTarget.innerHTML += `
            // <dialog class="example-dialog">
            //     <div class="alibi--name">name: ${alibiChosen.name}</div>
            //     <div class="alibi--text">alibi: ${alibiChosen.alibi}</div>
            //     <button class="close" type="reset">Close</button>
            // </dialog>
        
            // `
            
        // }
        //     // console.log("click heard")
    
    
    
    
    // export const AlibiBox = () => {
        // getCriminals()
        // .then(() => {
        //     const criminals= useCriminals()
        //     render(criminals)
        // })
    
})

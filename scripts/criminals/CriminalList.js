import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js";
import {useConvictions} from "../convictions/ConvictionProvider.js"
import { useOfficers } from '../officers/OfficerDataProvider.js';
import { getWitness, useWitness } from '../witnesses/WitnessDataProvider.js';
import { Witness } from '../witnesses/Witness.js';

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


//_______________-Rendering Witnesses________________________

export const WitnessList= () => {
    getWitness()
    .then(() => {
        const witnessObj = useWitness()
        renderWitness(witnessObj)
    })
    
}

const renderWitness = (witnessObject) => {
    let witnesshtmlRep = ""
    for (const witness of witnessObject ) {
        witnesshtmlRep += Witness(witness)
    }

    contentTarget.innerHTML = ` <section class="witnessList">${witnesshtmlRep} </section>`
}
eventHub.addEventListener("showWitnessClicked", customEvent => {
   WitnessList()
    
})

//________________________________________________
//Listens for custum event from OfficeSelect dropdown
eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer
    // console.log("clicked")

    // debugger

    // How can you get the criminals that were arrested by that officer?
    
    const officersArray = useOfficers()
    const officerThatWasChosen = officersArray.find(officerObj => {
        return officerObj.id === parseInt(event.detail.officer)
    })
    
   
    
    const criminals = useCriminals()
    
    const criminalArray= criminals.filter(
        criminalObject => criminalObject.arrestingOfficer === officerThatWasChosen.name

        )
        
        renderToDom(criminalArray)

    // debugger
})
//_________________________________________________________________
//Event Listener sorting Criminals by Crime using crime dropdown
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
       
           
        // Import useConviction and find object id.
            
           const convictionsArray= useConvictions()
            
           
           const convictionThatWasChosen = convictionsArray.find(convictionObj => {
               return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
            })

            // console.log("checked", convictionThatWasChosen.name)
            
            
             /*
            Filter the criminals application state down to the people that committed the crime
            */
            
            const appStateCriminals = useCriminals()


            const matchingCriminals = appStateCriminals.filter(criminalObj =>
            criminalObj.conviction === convictionThatWasChosen.name
  
        )

        /*
        Then invoke render() and pass the filtered collection as
        an argument
        */
        renderToDom(matchingCriminals)
    }
})

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            renderToDom(appStateCriminals)
        })
}

const renderToDom = criminalCollection => {
        let criminalHTMLRep = ""
        // 
        criminalCollection.forEach(criminal => {
            criminalHTMLRep += Criminal(criminal)
        }); 
    contentTarget.innerHTML = `
    <section class="criminalList">${criminalHTMLRep}</section>
`
}


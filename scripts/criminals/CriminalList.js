import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js";
import {useConvictions} from "../convictions/ConvictionProvider.js"
import { useOfficers } from '../officers/OfficerDataProvider.js';
import { getWitness, useWitness } from '../witnesses/WitnessDataProvider.js';
import { Witness } from '../witnesses/Witness.js';
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js';


const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


//_____________________Rendering Witnesses

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

    contentTarget.innerHTML = ` <section class="witnessList"><h3>Witness Statements</h3>${witnesshtmlRep} </section>`
}
eventHub.addEventListener("showWitnessClicked", customEvent => {
   WitnessList()
    
})

//_____________________Listens for custum event from OfficeSelect dropdown
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
//_________________Event Listener sorting Criminals by Crime using crime dropdown
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

        renderToDom(matchingCriminals)
    }
})

//_________________Render ALL criminals initally
export const CriminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            renderToDom(criminals, facilities, crimFac)
        })
}

const renderToDom = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    const criminalFilter = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")


    contentTarget.innerHTML = `
    <section class="criminalList">${criminalFilter}</section>
`
}


import {Facility} from "../facility/Facility.js"
import {getCriminals, useCriminals} from "../criminals/CriminalDataProvider.js"
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js';

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


export const FaciltyList= () => {
    getFacilities()
    .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            // Pull in the data now that it has been fetched
            const facilityArray = useFacilities()
            const crimFacility = useCriminalFacilities()
            const criminals = useCriminals()
    
        renderFacility(facilityArray,crimFacility,criminals)
    })
    const renderFacility=(allFacilities, allRelationships, criminalArray) => {
        // Step 1 - Iterate all facility
        const facilityFilter = allFacilities.map(
            (facilityObject) => {
                // Step 2 - Filter all relationships to get only ones for this facility
                const CriminalRelationshipsForThisFacility = allRelationships.filter(cf => cf.facilityId === facilityObject.id)
    
                // Step 3 - Convert the relationships to criminals with map()
                const criminal = CriminalRelationshipsForThisFacility.map(cf => {
                    const matchingCriminalObject = criminalArray.find(criminals => criminals.id === cf.criminalId)
                    return matchingCriminalObject
                })
    
                // Must pass the matching Criminal to the facilities component
            //    console.log(facilityObject, criminal)
                return Facility(facilityObject, criminal)
            }
        ).join("")
    
        contentTarget.innerHTML = ` <section class="facilityList">${facilityFilter} </section>`
    }
}


eventHub.addEventListener("facilitiesButtonClicked", customEvent => {
    FaciltyList()
    
})

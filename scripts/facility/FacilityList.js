import {Facility} from "../facility/Facility.js"
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js';

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


export const FaciltyList= () => {
    getFacilities()
    .then(() => {
        const facilityArray = useFacilities()
        renderFacility(facilityArray)
    })
    
}

const renderFacility = (facilityObject) => {
    let faciltyhtmlRep = ""
    for (const facility of facilityObject ) {
        faciltyhtmlRep += Facility(facility)
    }

    contentTarget.innerHTML = ` <section class="facilityList">${faciltyhtmlRep} </section>`
}
eventHub.addEventListener("facilitiesButtonClicked", customEvent => {
    FaciltyList()
    
})
import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js";
import {useConvictions} from "../convictions/ConvictionProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


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

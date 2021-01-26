import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal =>
            criminal.conviction === event.detail.crimeThatWasChosen
  
        )
        render(matchingCriminals)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const render = criminalCollection => {
        let criminalHTMLRep = ""
        // 
        criminalCollection.forEach(criminal => {
            criminalHTMLRep += Criminal(criminal)
        });
    contentTarget.innerHTML = `
    <section class="criminalList">${criminalHTMLRep}</section>
`
}



// export const CriminalList = () => {
//     getCriminals()
// //         .then(() => {
//             const criminalArray = useCriminals()
//             let criminalHTMLRep = ""

//             for (const criminal of criminalArray) {
//                 criminalHTMLRep += Criminal(criminal)
//             }
//             criminalContainer.innerHTML = `
//             <section class="criminalList">${criminalHTMLRep}</section>
//         `
//         }
//         /*
//             Now that you have the data, what
//             component should be rendered?
//         */
//     )
// }
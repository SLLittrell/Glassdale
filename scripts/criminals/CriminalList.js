import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js";

const criminalContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            let criminalHTMLRep = ""

            for (const criminal of criminalArray) {
                criminalHTMLRep += Criminal(criminal)
            }
            criminalContainer.innerHTML = `
            <section class="criminalList">${criminalHTMLRep}</section>
        `
        }
        /*
            Now that you have the data, what
            component should be rendered?
        */
    )
}
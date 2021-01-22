import { getOfficers, useOfficers } from "./OfficerProvider.js";
import {Officer} from './Officer.js'

const officerContainer = document.querySelector(".officerContainer")

export const officerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
       
        let officerHtmlRep = ""

        for (const officer of officerArray) {
            officerHtmlRep += Officer(officer)

        }

        officerContainer.innerHTML = `
            <h3>Glassdale Officers</h3><section class="officerList">${officerHtmlRep}</section>
        `
    })
}


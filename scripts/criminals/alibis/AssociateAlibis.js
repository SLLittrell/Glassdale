
import { getCriminals, useCriminals } from "../CriminalDataProvider.js";

const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".criminalsContainer")

//listens for click on associate Alibi button
eventHub.addEventListener("chosenAlibi", customEvent => {
    AlibiBox()  
    // console.log("click heard")
})
// console.log("problem here")
const renderToDom = (alibiArray) => {
    const arrayOfAlibis = alibiArray
    `<dialog><section class="alibi">${arrayOfAlibis[1]}</section></dialog>`
}
export const AlibiBox = () => {
    getCriminals()
        .then(() => {
            const criminals= useCriminals()
            renderToDom(criminals)
        })
}
export const Criminal = (criminalObj) => {
    return `
    <div class="criminalContainer">
        <p class="criminalName">${criminalObj.name}</p>
        <p class="criminalAge">Age: ${criminalObj.age}</p>
        <p class="criminalCrime">Crime: ${criminalObj.conviction}</p>
        <p class="criminalTermStart">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminalTermEnd">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}

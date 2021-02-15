export const Facility = (facility) => {
    return `
       <div class="facility">
        <h2>${facility.facilityName}</h2>
        <div>Security: ${facility.securityLevel}</div>
        <div>Capacity: ${facility.capacity}</div>
        <div>Criminals: </div>
       </div>
    `
}
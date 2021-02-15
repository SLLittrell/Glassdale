export const Facility = (facility, criminals) => {
    return `
       <div class="facility">
        <h2>${facility.facilityName}</h2>
        <div>Security: ${facility.securityLevel}</div>
        <div>Capacity: ${facility.capacity}</div>
        <div>Criminals:  ${criminals.map(c => `<li>${c.name}</li>`).join("")}</div>
       </div>
    `
}
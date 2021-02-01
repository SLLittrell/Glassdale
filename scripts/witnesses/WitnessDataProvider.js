

//Get witness data from api and store in empty array
let witness = []

export const useWitness = () => witness.slice()

export const getWitness = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(
            parsedWitness => {
            console.table(parsedWitness)
            witness = parsedWitness
        })

}

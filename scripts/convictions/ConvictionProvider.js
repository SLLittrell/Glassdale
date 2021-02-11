let crimes = []

export const useConvictions = () => crimes.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedCrime => {
            console.log(parsedCrime)
            crimes = parsedCrime
        }
    )
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
}
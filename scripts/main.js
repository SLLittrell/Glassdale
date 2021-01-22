console.log("Welcome to the main module")
import {getOfficers} from './officers/OfficerProvider.js'
import {getCriminals} from './criminals/CriminalDataProvider.js'

console.log(getOfficers())
console.log(getCriminals())
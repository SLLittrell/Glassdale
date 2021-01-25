console.log("Welcome to the main module")
// import {getOfficers, useOfficers} from './officers/OfficerProvider.js'
// import {getCriminals} from './criminals/CriminalDataProvider.js'
import {OfficerList} from "./officers/OfficerList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";

// console.log(getOfficers())


//List of officers
OfficerList()

//List of criminals
CriminalList()

ConvictionSelect()
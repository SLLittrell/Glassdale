console.log("Welcome to the main module")

import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import {OfficerSelect} from './officers/OfficerSelect.js'
import {NoteForm} from './notes/NoteForm.js'
import {ShowNoteButton} from './notes/ShowNotesButton.js'
import  "../scripts/notes/NoteList.js"
import  "../scripts/criminals/alibis/AssociateAlibis.js"
import { ShowWitnessButton } from "./witnesses/ShowWitnessButton.js";
import { ShowFacilityButton } from "./facility/DisplayFacilitiesButton.js";
import "./facility/FacilityList.js";

// import { getWitness } from "./witnesses/WitnessDataProvider.js";

// console.log(getOfficers())




//List of criminals
CriminalList()

ConvictionSelect()

//select dropdown call
OfficerSelect()

//Note form html
NoteForm()

//Show notes button
ShowNoteButton()
// NoteList()

ShowWitnessButton()

ShowFacilityButton()

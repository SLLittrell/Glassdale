console.log("Welcome to the main module")

import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import {OfficerSelect} from './officers/OfficerSelect.js'
import {NoteForm} from './notes/NoteForm.js'
import {ShowNoteButton} from './notes/ShowNotesButton.js'
// import {NoteList} from "./notes/NoteList.js"
// console.log(getOfficers())


//List of officers
// OfficerList()

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
export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="note__suspect">Note about: ${criminalObject.name}</div>
            <div class="note__text">Note: ${ noteObject.note }</div>
            <div class="note__auther">Officer Name: ${ noteObject.auther }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        </section>
    `
}
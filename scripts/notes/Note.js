export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__text">Note:${ noteObject.note }</div>
            <div class="note__auther">Officer Name: ${ noteObject.suspect }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        </section>
    `
}
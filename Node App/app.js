const noteContainer = document.querySelector(".app");
const btnAdd = noteContainer.querySelector(".btn-add");

btnAdd.addEventListener("click", () => addNotes());

getNotes().forEach((note) => {
  const noteElement = createNodeElement(note.id, note.content);
  noteContainer.insertBefore(noteElement, btnAdd);
});

function getNotes() {
  // get data from local
  return JSON.parse(localStorage.getItem("sticky-notes") ?? "[]");
}

function saveNotes(notes) {
  // save data to local
  localStorage.setItem("sticky-notes", JSON.stringify(notes));
}

function createNotes(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "writing your notes";

  element.addEventListener("change", () => {
    updateNotes(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const isCheck = confirm("Your are delete notes ?");
    if (isCheck) {
      deleteNotes(id, element);
    }
  });

  return element;
}

function addNotes() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 500),
    content: "",
  };

  const noteElement = createNotes(noteObject.id, noteObject.content);
  noteContainer.insertBefore(noteElement, btnAdd);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNotes(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];
  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNotes(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  noteContainer.removeChild(element);
}

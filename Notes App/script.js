let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    container.innerHTML += `
<div class="note">
<p>${note}</p>

<div class="actions">
<button class="edit" onclick="editNote(${index})">Edit</button>
<button class="delete" onclick="deleteNote(${index})">Delete</button>
</div>

</div>
`;
  });
}

function addNote() {
  let input = document.getElementById("noteInput");
  let text = input.value;

  if (text === "") return;

  notes.push(text);

  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";

  showNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notes));

  showNotes();
}

function editNote(index) {
  let newNote = prompt("Edit your note:", notes[index]);

  if (newNote !== null) {
    notes[index] = newNote;

    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();
  }
}

showNotes();

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

  function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = React.useState(null);
  
  function handleEdit(id) {
  const noteToEdit = notes.find((note) => note.id === id);
  setEditingNote(noteToEdit);
  }

  function saveEdit(updatedNote) {
  setNotes((prevNotes) =>
    prevNotes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    )
  );
  setEditingNote(null); // Exit edit mode
  }

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
  onAdd={addNote}
  editingNote={editingNote}
  saveEdit={saveEdit}
/>

{notes.map((noteItem) => (
  <Note
    key={noteItem.id}
    id={noteItem.id}
    title={noteItem.title}
    content={noteItem.content}
    onDelete={deleteNote}
    onEdit={handleEdit}
  />
))}

      <Footer />
    </div>
  );
}

export default App;

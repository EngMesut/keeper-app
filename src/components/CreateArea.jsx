import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea({ onAdd, editingNote, saveEdit }) {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (editingNote) {
      setNote(editingNote);
    }
  }, [editingNote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (editingNote) {
      saveEdit(note);
    } else {
      onAdd(note);
    }
    setNote({ title: "", content: "" });
  }

  return (
    <form className="create-note">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <Zoom in={true}>
        <Fab onClick={handleSubmit}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;

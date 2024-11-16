import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note({ id, title, content, onDelete, onEdit }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <DeleteIcon />
      </button>
      <button onClick={() => onEdit(id)}>
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;

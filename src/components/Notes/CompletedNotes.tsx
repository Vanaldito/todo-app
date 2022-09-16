import { useContext } from "react";
import NotesContext from "../../contexts/notes";
import TrashIcon from "../Icons/Trash";
import Note from "../Note";

export default function CompletedNotes() {
  const { notes, modifiers } = useContext(NotesContext) || {};

  return (
    <div className="completed-notes">
      {notes &&
        notes.map((note, index) =>
          note.type === "completed" ? (
            <div className="completed-notes__note">
              <Note
                key={index}
                type="completed"
                content={note.content}
                index={index}
              />
              <button
                type="button"
                onClick={() => modifiers?.delete(index)}
                className="completed-notes__delete-button"
              >
                <TrashIcon color="orange" />
              </button>
            </div>
          ) : null
        )}
      {notes && notes.some(note => note.type === "completed") && (
        <button
          type="button"
          className="completed-notes__delete-all"
          onClick={modifiers?.deleteAll}
        >
          <TrashIcon color="white" /> Delete All
        </button>
      )}
    </div>
  );
}

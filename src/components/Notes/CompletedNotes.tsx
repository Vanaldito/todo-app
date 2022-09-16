import { useContext } from "react";
import NotesContext from "../../contexts/notes";
import Note from "../Note";

export default function CompletedNotes() {
  const { notes, modifiers } = useContext(NotesContext) || {};

  return (
    <>
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
                Delete
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
          Delete All
        </button>
      )}
    </>
  );
}

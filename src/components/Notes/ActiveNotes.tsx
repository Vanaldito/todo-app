import { Note } from "../../types";
import AddNoteForm from "../AddNoteForm";

interface ActiveNotesProps {
  activeNotes: Note[];
  addNote: (noteContent: string) => void;
}

export default function ActiveNotes({
  activeNotes,
  addNote,
}: ActiveNotesProps) {
  return (
    <>
      <AddNoteForm addNote={addNote} />
      {activeNotes.map((note, index) => (
        <div className="note" key={index}>
          <input type="checkbox" />
          <span>{note.content}</span>
        </div>
      ))}
    </>
  );
}

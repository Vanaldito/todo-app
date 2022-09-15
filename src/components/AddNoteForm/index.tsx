import { useState } from "react";

import "./styles.css";

interface AddNoteFormProps {
  addNote: (noteContent: string) => void;
}

export default function AddNoteForm({ addNote }: AddNoteFormProps) {
  const [text, setText] = useState("");

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    text && addNote(text);

    setText("");
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <form className="add-note-form" onSubmit={submitHandler}>
      <input
        className="add-note-input"
        type="text"
        placeholder="Add details"
        onChange={changeHandler}
        value={text}
      />
      <button className="add-note-button" type="submit">
        Add
      </button>
    </form>
  );
}

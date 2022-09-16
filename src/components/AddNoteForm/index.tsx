import { useContext, useState } from "react";
import NotesContext from "../../contexts/notes";

import "./styles.css";

export default function AddNoteForm() {
  const [text, setText] = useState("");

  const { modifiers } = useContext(NotesContext) || {};

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    text && modifiers?.add(text);

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

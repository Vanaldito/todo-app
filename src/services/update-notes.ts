import { Note } from "../types";

export function updateNotes(newNotes: Note[]) {
  localStorage.setItem("notes", JSON.stringify(newNotes));
}

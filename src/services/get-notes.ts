import { Note } from "../types";

export function getNotes(): Note[] {
  const notes = localStorage.getItem("notes");

  return notes ? JSON.parse(notes) : [];
}

import "./styles.css";

interface NoteProps {
  content: string;
}

export default function Note({ content }: NoteProps) {
  return (
    <div className="note">
      <input type="checkbox" />
      <span>{content}</span>
    </div>
  );
}

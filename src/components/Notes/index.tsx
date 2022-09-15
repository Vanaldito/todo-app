import "./styles.css";

export default function Notes() {
  return (
    <div className="notes">
      <nav className="notes__navbar">
        <button className="notes__navbar__button" type="button">
          All
        </button>
        <button className="notes__navbar__button" type="button">
          Active
        </button>
        <button className="notes__navbar__button" type="button">
          Completed
        </button>
      </nav>
      <form className="notes__add-note-form">
        <input
          className="notes__add-note-input"
          type="text"
          placeholder="Add details"
        />
        <button className="notes__add-note-button" type="button">
          Add
        </button>
      </form>
      <div className="note">
        <input type="checkbox" />
        <span>Do coding challenges</span>
      </div>
    </div>
  );
}

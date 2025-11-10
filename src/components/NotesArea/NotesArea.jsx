import React, { useState, useRef, useEffect } from "react";
import styles from "./NotesArea.module.css";
import InitialImg from "../../assets/InitialImg.png"; 

// functionality for getInitials("Html Tag") => "HT"

function getInitials(name) {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  const chars = words.slice(0,2).map(w => w[0]?.toUpperCase() || "");
  return chars.join("");
}

// NotesArea function component

export default function NotesArea({ group, onUpdateGroup, onBack }) {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => setInput(""), [group]);

  // Initial welcome screen, no group selected

  if (!group) {
    return (
      <section className={styles.fullWelcomeArea}>
        <div className={styles.centerContent}>
          <img src={InitialImg} className={styles.illustration} alt="Pocket Notes Illustration" />
          <h1 className={styles.heading}>Pocket Notes</h1>
          <div className={styles.descBlock}>
            <div className={styles.descLine}>Send and receive messages without keeping your phone online.</div>
            <div className={styles.descLine}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</div>
          </div>
        </div>
        <div className={styles.encrypted}>
          <span className={styles.lockIcon}>🔒</span>
          end-to-end encrypted
        </div>
      </section>
    );
  }

  const initials = getInitials(group.name);

  function handleAddNote() {
    if (input.trim()) {
      const now = new Date().toISOString();
      const newNote = {
        id: Date.now(),
        text: input,
        created: now,
        updated: now
      };
      onUpdateGroup({
        ...group,
        notes: [...group.notes, newNote]
      });
      setInput("");
    }
  }

  function handleInputKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddNote();
    }
  }

  return (
    <section className={styles.notesArea}>
      <div className={styles.headerBar}>
        <div className={styles.avatar} style={{ background: group.color }}>
          {initials}
        </div>
        <div className={styles.groupTitle}>{group.name}</div>
      </div>
      <div className={styles.notesList}>
        {group.notes.map(n => (
          <div key={n.id} className={styles.noteCard}>
            <div className={styles.noteText}>{n.text}</div>
            <div className={styles.noteMeta}>
              <span className={styles.metaBold}>
                {new Date(n.created).toLocaleDateString("en-GB", {day: "numeric", month: "short", year: "numeric"})}
              </span>
              <span className={styles.metaDot}>●</span>
              <span className={styles.metaBold}>
                {new Date(n.created).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form
        className={styles.noteInputForm}
        onSubmit={e => {
          e.preventDefault();
          handleAddNote();
        }}
      >
        <textarea
          ref={inputRef}
          rows={2}
          className={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInputKey}
          placeholder="Enter your text here............"
        />
        <button
          type="submit"
          className={styles.sendBtn}
          disabled={!input.trim()}
        >
          &#10148;
        </button>
      </form>
    </section>
  );
}

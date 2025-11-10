import React, { useRef, useState, useEffect } from "react";
import styles from "./GroupPopup.module.css";

const COLORS = ["#c192e6", "#75d4e6", "#ffb7ae", "#77e4c8", "#3e68f2", "#969ceb"];

// GroupPopup function component

export default function GroupPopup({ groups, onClose, onCreate }) {
  const popupRef = useRef();
  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    function handler(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popupRef, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Group name must be at least 2 characters.");
      return;
    }
    if (groups.some(g => g.name.toLowerCase() === trimmed.toLowerCase())) {
      setError("Group already exists!");
      return;
    }
    onCreate({ id: Date.now(), name: trimmed, color, notes: [] });
    onClose();
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup} ref={popupRef}>
        <h3 className={styles.title}>Create New group</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.labelRow}>
            <span className={styles.label}>Group Name</span>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={e => { setError(""); setName(e.target.value); }}
              placeholder="Enter group name"
              autoFocus
              maxLength={24}
            />
          </label>
          <label className={styles.labelRow}>
            <span className={styles.label}>Choose colour</span>
            <div className={styles.colors}>
              {COLORS.map(c =>
                <div
                  key={c}
                  className={styles.colorSwatch}
                  style={{
                    background: c,
                    outline: c === color ? "2.5px solid #213bb1" : "none"
                  }}
                  onClick={() => setColor(c)}
                  tabIndex={0}
                  aria-label={`Choose ${c}`}
                  role="button"
                />
              )}
            </div>
          </label>
          {error && <div className={styles.error}>{error}</div>}
          <button
            className={styles.create}
            type="submit"
            disabled={name.trim().length < 2}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

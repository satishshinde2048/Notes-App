import React, { useState } from "react";
import GroupPopup from "../GroupPopup/GroupPopup";
import styles from "./Sidebar.module.css";

// functionality for getInitials("Html Tag") => "HT"

function getInitials(name) {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  const chars = words.slice(0,2).map(w => w[0]?.toUpperCase() || "");
  return chars.join("");
}

// Sidebar function component

export default function Sidebar({
  groups,
  setSelectedGroupId,
  selectedGroupId,
  onAddGroup
}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>Pocket Notes</div>
      <div className={styles.groups}>
        {groups.map(g =>
          <div
            key={g.id}
            className={`${styles.groupItem} ${selectedGroupId === g.id ? styles.selected : ""}`}
            onClick={() => setSelectedGroupId(g.id)}
          >
            <div className={styles.avatar} style={{ background: g.color }}>
              {getInitials(g.name)}
            </div>
            <span className={styles.groupName}>{g.name}</span>
          </div>
        )}
      </div>
      <button className={styles.add} onClick={() => setShowPopup(true)}>+</button>
      {showPopup &&
        <GroupPopup
          groups={groups}
          onClose={() => setShowPopup(false)}
          onCreate={onAddGroup}
        />
      }
    </aside>
  );
}

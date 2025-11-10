import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesArea from "./components/NotesArea/NotesArea";
import styles from "./App.module.css";

const LOCALKEY = "pocket-notes-groups";

function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 760);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [showGroups, setShowGroups] = useState(true);
  const isMobile = useMobile();

  useEffect(() => {
    const stored = localStorage.getItem(LOCALKEY);
    if (stored) setGroups(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALKEY, JSON.stringify(groups));
  }, [groups]);

  const handleAddGroup = (group) => setGroups([...groups, group]);
  const handleUpdateGroup = (updatedGroup) =>
    setGroups(groups.map((g) => (g.id === updatedGroup.id ? updatedGroup : g)));
  const handleSelectGroup = (id) => {
    setSelectedGroupId(id);
    setShowGroups(false);
  };

  return (
    <div className={styles.app}>
      {isMobile ? (
        showGroups || !selectedGroupId ? (
          <Sidebar
            groups={groups}
            setSelectedGroupId={handleSelectGroup}
            selectedGroupId={selectedGroupId}
            onAddGroup={handleAddGroup}
          />
        ) : (
          <NotesArea
            group={groups.find((g) => g.id === selectedGroupId)}
            onUpdateGroup={handleUpdateGroup}
            onBack={() => setShowGroups(true)}
          />
        )
      ) : (
        <>
          <Sidebar
            groups={groups}
            setSelectedGroupId={setSelectedGroupId}
            selectedGroupId={selectedGroupId}
            onAddGroup={handleAddGroup}
          />
          <NotesArea
            group={groups.find((g) => g.id === selectedGroupId)}
            onUpdateGroup={handleUpdateGroup}
            onBack={() => setShowGroups(true)}
          />
        </>
      )}
    </div>
  );
}

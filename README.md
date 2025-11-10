# Notes App

A modern, user-friendly notes management application where you can organize notes by groups, have persistent storage, and a clean, responsive UI.

![Pocket Notes Welcome Screen](./assets/welcome-screen.png)
![Pocket Notes Main App](./assets/main-app.png)

---

## Features

- **Create Note Groups:**  
  - Click the "+" button to open a popup for creating a new note group.  
  - No duplicate group names are allowed.  
  - Group names less than 2 characters are not allowed.  
  - Each group's display picture uses the first two initials of the group name (in uppercase).

- **Close Popup by Clicking Outside:**  
  - The group creation popup closes when you click outside the popup area.

- **Add Notes Per Group:**  
  - Add rich text notes to any group you select.  
  - Notes are saved by pressing the Enter key or clicking the Send icon in the input field.

- **Persistent Storage:**  
  - Groups and notes are saved in browser storage (localStorage), so your data persists on reload.

- **Meta Data (Timestamps):**  
  - Each note shows created date and time, and when it was last updated.

- **Dynamic Send Button:**  
  - The Send button is only active (colored) when there is content in the text box, per the design spec.

- **Responsive Design:**  
  - The app design closely matches the provided Figma/mockup across desktop and mobile views.  
  - The layout does not deviate from the given UI.

- **Switch Groups:**  
  - Switching between groups updates the notes area in real-time based on the active group.

---

## Screenshots

### Welcome Screen
![Welcome Screen](./assets/welcome-screen.png)

### Main Application View
![Main App View](./assets/main-app.png)

---

## Getting Started

1. **Clone the repository:**
git clone https://github.com/your-username/pocket-notes-app.git
cd pocket-notes-app

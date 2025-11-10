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
2. **Install dependencies:**
npm install

text

3. **Start the development server:**
npm start

text

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Code Structure

## Project Structure

```
notes-app/
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.module.css
│   │   ├── GroupPopup/
│   │   │   ├── GroupPopup.jsx
│   │   │   └── GroupPopup.module.css
│   │   └── NotesArea/
│   │       ├── NotesArea.jsx
│   │       └── NotesArea.module.css
│   ├── assets/
│   │   └── InitialImg.png
│   └── App.jsx
├── README.md
└── package.json
```
### Key Components

- **Sidebar**: Displays note groups with avatars and handles group selection
- **GroupPopup**: Modal for creating new note groups with color selection
- **NotesArea**: Main area for viewing and adding notes to selected group
- **App.jsx**: Root component managing application state
```

## Method 2: Step-by-Step Instructions

1. **Open your README.md file** in any text editor or directly on GitHub

2. **Add a heading** where you want the structure:
   ```markdown
   ## Project Structure
   ```

3. **Add triple backticks** on a new line:


text

- **Sidebar.jsx**, **Sidebar.module.css**: Renders the group list and handles group selection and new group creation.
- **GroupPopup.jsx**, **GroupPopup.module.css**: Handles the popup for creating new groups, including validation and closing logic.
- **NotesArea.jsx**, **NotesArea.module.css**: Handles displaying and adding notes for each group.
- Utility functions (e.g., `getInitials`) provide initials for group avatars.
- Styles are modular CSS for scoped, maintainable design.

---

## Implementation Notes

- **No duplicate group names:** Validation prevents creation of groups with duplicate or too-short names.
- **Popup closes on outside click:** Listens for clicks outside the modal to automatically close.
- **Group initials:** Extracts the first two uppercase letters for the group avatar.
- **Persistent data:** Notes and groups are stored in localStorage and loaded on app boot.
- **Fast switching:** Changing groups reloads only the relevant notes.
- **Meta data:** Notes display created/updated date and time for full context.
- **Responsive Design:** Fully optimized for both desktop and mobile views.

---

## Technologies Used

- **React** - Frontend framework
- **CSS Modules** - Scoped styling
- **LocalStorage** - Persistent data storage
- **JavaScript ES6+** - Modern JavaScript features

---

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge


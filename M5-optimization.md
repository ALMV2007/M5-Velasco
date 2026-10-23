### 1. Navigation Toggle
* **Question / Gap Identified:** What should happen if the user clicks outside the open navigation menu?
* **Decision:** Accept
* **Reason:** Accepts this to improve mobile UX by closing the menu on outside click.

---

### 2. Navigation Toggle
* **Question / Gap Identified:** What should happen if the user presses the Escape key while the menu is open?
* **Decision:** Reject
* **Reason:** Keyboard navigation via Escape key is beyond the required mobile toggle scope.

---

### 3. Dark Mode Toggle
* **Question / Gap Identified:** What should happen if browser storage is unavailable or contains an unexpected value?
* **Decision:** Accept
* **Reason:** Prevents JS errors by defaulting safely to light mode if local storage fails.

---

### 4. Dark Mode Toggle
* **Question / Gap Identified:** What should happen if the user switches between pages after choosing a theme?
* **Decision:** Accept
* **Reason:** Reading `localStorage` on page load keeps the theme consistent across pages.

---

### 5. Dynamic Content Render
* **Question / Gap Identified:** What should happen if the reviews array is empty?
* **Decision:** Accept
* **Reason:** Displays a fallback message like "No reviews available" inside the table.

---

### 6. Dynamic Content Render
* **Question / Gap Identified:** What should happen if a review object is missing a property or contains invalid data?
* **Decision:** Accept
* **Reason:** Using default values ("N/A") ensures missing properties won't break rendering.

---

### 7. Form Validation
* **Question / Gap Identified:** What should happen if the user enters only spaces in a field?
* **Decision:** Accept
* **Reason:** Using `.trim()` before checking string length catches whitespace-only input.

---

### 8. Form Validation
* **Question / Gap Identified:** What should happen if the form is submitted with multiple invalid fields?
* **Decision:** Accept
* **Reason:** Validation loop checks all inputs and renders individual error messages simultaneously.
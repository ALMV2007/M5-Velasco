# **Navigation Toggle**:
Trigger - Clicking menu button in the header.
Expected DOM Change - Toggles the active class on the nav menu to show or hide navigation links.
Edge Case - Posibility of resizing the screen to desktop width while the mob  ile menu is open.
## Pseudocode
1. LISTEN for a click event on the hamburger menu button.
2. IF the navigation menu has the `active` class:
   - THEN remove the `active` class.
3. ELSE:
   - Add the `active` class.
4. LISTEN for clicks on the document:
   - IF the click target is outside the navigation menu AND outside the menu icon AND menu is open:
     - THEN remove the `active` class.
5. LISTEN for window resize events:
   - IF window width exceeds 600px:
     - THEN remove the `active` class.

# Dark Mode Toggle:
Trigger - Clicking the dark mode theme button.
Expected DOM Change - Toggles a dark-theme class on the <body> element to switch color tokens.
Edge Case - Reopening or refreshing the page without saving user theme preference in local storage.
## Pseudocode
1. ON page load:
   - READ saved theme from `localStorage` safely using a try/catch block.
   - IF saved theme is "dark":
     - THEN add `dark-theme` class to `<body>`.
2. LISTEN for click event on theme toggle button.
3. TOGGLE `dark-theme` class on `<body>`.
4. IF `<body>` has `dark-theme` class:
   - THEN save "dark" to `localStorage`.
5. ELSE:
   - Save "light" to `localStorage`.

# Dynamic Content Render:
Trigger - Page load event (DOMContentLoaded).
Expected DOM Change - Generates review rows dynamically from an array of objects and injects them into <tbody>.
Edge Case - Array is completely empty or missing required object keys.
## Pseudocode
1. DEFINE an array of review objects containing `restaurant`, `cuisine`, `dish`, `rating`, and `verdict`.
2. LISTEN for `DOMContentLoaded` event.
3. SELECT target `<tbody>` element in table.
4. CLEAR existing `<tbody>` content.
5. IF review array length is 0:
   - THEN render fallback row: "No reviews available."
   - EXIT function.
6. ITERATE over review array using `.forEach()` or `.map()`:
   - FOR EACH object, extract values (defaulting missing properties to "N/A").
   - CONSTRUCT table row HTML string.
   - APPEND table row to `<tbody>`.

# Form Validation:
Trigger - Submitting the contact form via the submit button.
Expected DOM Change - Displays specific error text directly under any invalid field or clears errors if valid.
Edge Case - Submitting fields containing only blank spaces or an incorrectly formatted email address.
## Pseudocode
1. LISTEN for `submit` event on contact form.
2. PREVENT default form submission (`event.preventDefault()`).
3. CLEAR all existing error message elements and styling.
4. GET values for Name, Email, Subject, and Message, applying `.trim()`.
5. SET `isValid` flag to `true`.
6. IF Name is empty:
   - THEN display "Name is required" under Name input.
   - SET `isValid` to `false`.
7. IF Email is empty OR invalid format:
   - THEN display "Please enter a valid email address" under Email input.
   - SET `isValid` to `false`.
8. IF Subject is empty:
   - THEN display "Subject is required" under Subject input.
   - SET `isValid` to `false`.
9. IF Message is empty:
   - THEN display "Message cannot be blank" under Message textarea.
   - SET `isValid` to `false`.
10. IF `isValid` is `true`:
    - DISPLAY success message and RESET form fields.
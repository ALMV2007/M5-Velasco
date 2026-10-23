


  

## Change Applied

I moved the repeated clearing statements into a helper function named
`clearFormFeedback()`.

   event.preventDefault();
   clearFormFeedback();

   const name = nameInput.value.trim();
   const email = emailInput.value.trim();
   const subject = subjectInput.value.trim();
   const message = messageInput.value.trim();
   

## Reason

The main submit handler became easier to scan because the clearing
process is represented by one meaningful function call.

## Testing

I repeated the form-validation tests after making the change. The
validation messages, invalid-field styling, and success message continued
to work correctly.

## Suggestion Rejected

I rejected the suggestion to change the email regular expression because
it was not necessary for the project and I understood its current purpose.

## Observed Improvement

Before the change, the submit handler contained multiple repeated
clearing statements. After the change, it uses one clearly named helper
call, making the validation steps easier to follow.

//----------------------------------------------------------------------//

# M5 Optimisation Record

## Function Selected

I selected the contact-form submit handler because it was the longest
function in `js/script.js`.

## Prompt Sent

> Critique this function for readability. Do not rewrite it.

## AI Critique

The function is generally readable and beginner-friendly.

Strengths:

- Variable names clearly describe each input and message element.
- The process follows a logical order: prevent submission, clear previous results, read values, validate, then show success.
- The validation conditions are easy to follow.
- The comment accurately explains the function’s purpose.

Readability concerns:

- The submit handler is becoming long because it handles clearing messages, clearing classes, reading values, validating fields, and displaying results all in one place.
- The repeated clearing and class-removal statements make the beginning feel repetitive.
- The comment says the function “checks form fields,” but it also resets the form and updates several parts of the page.
- The name `isValid` is clear, but its value changes in several separate conditions, so the final result requires reading the entire function.
- The regular expression is difficult to understand without prior knowledge of email patterns.
- The success message says the message is “ready to be sent,” although the form submission is prevented, which may be slightly confusing to readers.
- The error messages use different wording for similar situations: “Email is required” versus “Please enter a valid email address.”

## Before the Change

The submit handler directly contained repeated statements for clearing
error messages and removing invalid styling.

  event.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  nameInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
  subjectInput.classList.remove("invalid");
  messageInput.classList.remove("invalid");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

## Change Applied

I created a helper function named `clearFormFeedback()` and replaced the
repeated clearing statements with one function call.

// Clears previous validation messages and invalid-field styling.
function clearFormFeedback() {
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  nameInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
  subjectInput.classList.remove("invalid");
  messageInput.classList.remove("invalid");
}

// Checks form fields and displays specific validation messages.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFormFeedback();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();
})

The submit handler now uses:

```javascript
event.preventDefault();
clearFormFeedback();
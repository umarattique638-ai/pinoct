const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s-]{6,17}$/;

/** Validates the contact form. Returns an object of { field: message } for invalid fields. */
export function validateContact(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  else if (values.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!values.email.trim()) errors.email = "Email is required so we can reply.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";

  if (values.phone && !PHONE_RE.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";

  if (!values.topic) errors.topic = "Please choose a topic.";

  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 20) errors.message = "Please add a little more detail (at least 20 characters).";

  if (!values.consent) errors.consent = "Please confirm you have read the note above.";
  return errors;
}

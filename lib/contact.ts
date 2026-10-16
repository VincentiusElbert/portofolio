// Shared by the contact form (instant feedback) and the API route (the real check)

export type ContactInput = {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>

export const MESSAGE_MIN = 10
export const MESSAGE_MAX = 5000

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {}
  const name = input.name.trim()
  const email = input.email.trim()
  const message = input.message.trim()

  if (name.length < 2) errors.name = "Please enter your name."
  else if (name.length > 100) errors.name = "That name is a bit long (max 100 characters)."

  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address."
  else if (email.length > 200) errors.email = "That email is too long."

  if (message.length < MESSAGE_MIN) errors.message = `Please write at least ${MESSAGE_MIN} characters.`
  else if (message.length > MESSAGE_MAX) errors.message = `Please keep it under ${MESSAGE_MAX} characters.`

  return errors
}

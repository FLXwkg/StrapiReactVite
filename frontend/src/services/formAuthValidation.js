import { isLength } from 'validator'
const validateRegisterForm = (formData) => {
  const errors = {}
  if (typeof formData === 'object') {
    if (!isLength(formData.firstName, 2, undefined)) {
      errors.firstName = 'First name is too short'
    }
    if (!isLength(formData.lastName, 2, undefined)) {
      errors.firstName = 'Last name is too short'
    }
  } else {
    throw new Error('Invalid parameter type')
  }
  return errors
}
export { validateRegisterForm }

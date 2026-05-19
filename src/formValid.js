import { projectList } from './project.js';

export function checkForm(input, isTodo = false) {
  if (input.validity.tooShort || input.validity.valueMissing) {
    input.setCustomValidity(
      'Giving your project or todo a name is a good idea'
    );
    input.reportValidity();
    return false;
  }
  if (!isTodo) {
    const isDuplicate = checkProjectDuplicate(input);
    if (isDuplicate) return false;
  }
  input.setCustomValidity('');
  return true;
}

function checkProjectDuplicate(input) {
  const exist = projectList.some((e) => e.name === input.value);
  if (exist) {
    input.setCustomValidity(
      "Your project's name is already exists. Please give it another game"
    );
    input.reportValidity();
    return true;
  }
}

'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  input.placeholder = capitalize(input.name);
  input.parentElement.insertBefore(label, input);
});

function capitalize(text) {
  const capitalized = text[0].toUpperCase() + text.slice(1);

  return capitalized;
}

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
const formData = {};
bootPage();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData.email = formEl.email.value;
  formData.message = formEl.message.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}
function bootPage() {
  if (!localStorage.getItem(KEY)) {
    return;
  }
  formEl.elements.message.value = JSON.parse(localStorage.getItem(KEY)).message;
  formEl.elements.email.value = JSON.parse(localStorage.getItem(KEY)).email;
}
function onFormSubmit(evt) {
  evt.preventDefault();
    if (formEl.email.value === '' || formEl.message.value === '') {
      console.log('Заповніть всі поля, будь ласка!!!')
    return;
  }
  formData.email = formEl.email.value;
  formData.message = formEl.message.value;

  formEl.email.value = '';
  formEl.message.value = '';
  localStorage.clear();
  console.log(formData);
}

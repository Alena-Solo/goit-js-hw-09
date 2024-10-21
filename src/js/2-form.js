console.log('Form');
let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
};

loadFormData();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});

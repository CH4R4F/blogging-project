const modal = document.getElementById('modal');
const username = document.getElementById('username');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  if (username.value && email.value) {
    modal.classList.add('hidden');
    // save user in local storage
    const user = {
      id: Date.now(),
      username: username.value,
      email: email.value,
    }
    localStorage.setItem('user', JSON.stringify(user));
  }
})
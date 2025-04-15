// Goal: Create a simple contact form with validation and confirmation message.
// Tech: HTML, CSS, JS

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email.includes('@')) {
    document.getElementById('confirmation').style.display = 'block';
  } else {
    alert('Please enter a valid name and email.');
  }
});

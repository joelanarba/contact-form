// Select single elements instead of NodeList where necessary
let firstNameError = document.querySelector('.first-name'); 
let lastNameError = document.querySelector('.last-name'); 
let emailError = document.querySelector('.email-error');
let queryError = document.querySelector('.query'); // For radio button error
let messageError = document.querySelector('.message-error');
let consentError = document.querySelector('.consent-error');

// Add event listener to the button
document.querySelector('button').addEventListener('click', function () {
  let firstName = document.getElementById('first-name').value.trim();
  let lastName = document.getElementById('last-name').value.trim();
  let email = document.getElementById('email').value.trim();
  let queryType = document.querySelectorAll('input[name="query-type"]:checked'); // Check if a radio button is selected
  let message = document.getElementById('message').value.trim();

  // Email validation regex pattern
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // First name validation
  if (firstName === '') { 
    firstNameError.textContent = 'This field is required';
    document.getElementById('first-name').style.border = '1px solid hsl(0, 66%, 54%)';
  } else {
    firstNameError.textContent = ''; 
    document.getElementById('first-name').style.border = '1px solid hsl(120, 66%, 54%)'; // Green for valid input
  } 

  // Last name validation
  if (lastName === '') { 
    lastNameError.textContent = 'This field is required';
    document.getElementById('last-name').style.border = '1px solid hsl(0, 66%, 54%)';
  } else {
    lastNameError.textContent = ''; 
    document.getElementById('last-name').style.border = '1px solid hsl(120, 66%, 54%)';
  } 

  // Email validation
  if (email === '') {
    emailError.textContent = 'This field is required';
    document.getElementById('email').style.border = '1px solid hsl(0, 66%, 54%)';
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    document.getElementById('email').style.border = '1px solid hsl(0, 66%, 54%)';
  } else {
    emailError.textContent = ''; 
    document.getElementById('email').style.border = '1px solid hsl(120, 66%, 54%)';
  }

  // Radio button validation (Query Type)
  if (queryType.length === 0) { // If no radio button is selected
    queryError.textContent = 'Please select a query type';
    queryError.style.color = 'hsl(0, 66%, 54%)'; // Red color for error
  } else {
    queryError.textContent = ''; // Clear error if valid
  }

  


});
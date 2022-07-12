import "./style.css";

//show the user input on the webpage 
const app = document.querySelector('.app'),
form = app.querySelectorAll('.form'),
submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e){
  e.preventDefault();
  const formData = new FormData(form[0]);
  alert("Name: " + formData.get('name') + " - " + 
  "Email: " + formData.get('email') + " - " +
  "Date: " + formData.get('date') + " - " +
 "Phone number: "+ formData.get('phone') + " - " +
 "Service: " + formData.get('subject') + " - " +
 "Message: " + formData.get('message') + " - " +
  "How did you hear about us? " + formData.get('google') + " - " +
  formData.get('instagram') + " - " +
  formData.get('twitter') + " - " +
  formData.get('friend') + " - " +
  formData.get('other'))

}

document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click', getDataForm, false)
}, false);
// //name
// const nameInput = document.querySelector('input');

// nameInput.addEventListener('input', () => {
//   nameInput.setCustomValidity('');
//   nameInput.checkValidity();
// });

// nameInput.addEventListener('invalid', () => {
//   if(nameInput.value === '') {
//     nameInput.setCustomValidity('Enter your username!');
//   } else {
//     nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
//   }
// });
// //email
// //phone number

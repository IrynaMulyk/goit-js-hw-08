import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(evt) {
  if(evt.preventDefault(), form.email.value === '' || form.message.value === ''){
    return alert('Please fill in all fields');
  } else {
    console.log(formData); 
      evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  };
  
//  не працює 

//   Array.from(form.elements).forEach(element => {
//     if (evt.preventDefault(), form[element.name].value === ''){
//         return alert('Please fill in all fields');
//     } else {
//       console.log(formData); 
//       evt.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
//     }
//   })
}

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
populateFormData();

function populateFormData() {
  if (savedData) {
    for (const name in savedData) {
      formData[name] = savedData[name];
      form.elements[name].value = savedData[name];
    }
  }
}

// second variant

// function populateFormData(){
//     if (savedData){
//        Array.from(form.elements).forEach(element => {
//         for (const key in savedData){
//             if (element.name === key){
//                 formData[key] = savedData[key];
//                 element.value = savedData[key];
//             }
//         }
//         });
//     }
//     }
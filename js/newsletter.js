document.addEventListener('DOMContentLoaded', () => {
const url = 'https://jsonplaceholder.typicode.com/posts';

const newsl = document.getElementById('popup');
const close = document.getElementById('close');
const form = document.getElementById('newslform');

const expresiones = {
  name: /^[A-Za-z]{2,100}$/,
  email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}

if(sessionStorage.getItem('popup') === null){
    setTimeout(() =>{
        newsl.style.display = 'block';
    }, 5000);
  }


const cerrar = () =>{
  newsl.style.display = 'none';
  sessionStorage.setItem('popup', true);
}

// botón cerrar
close.addEventListener('click', () =>{
  cerrar()
})

// click fuera del newsletter
window.addEventListener('click',(event) => {
  if(event.target === popup){
    cerrar()
  }
})

// cerrar newsletter con escape
window.addEventListener('keydown',(event) => {
  if(event.code === 'Escape'){
    cerrar()
  }
})

form.addEventListener('submit',(event) => {
  event.preventDefault();
  
  const nameInput = event.target.nameNw;
  const emailInput = event.target.emailNw;

  let validName;
  let validEmail;

  if (nameInput.value === '' || expresiones.name.test(nameInput.value) === false){
    validName = false;
    nameInput.classList.add('popup__newslform--border-red');    
} 
else{ 
    validName = true;
    nameInput.classList.remove('popup__newslform--border-red');
    nameInput.classList.add('popup__newslform--border-green');   
}

if (emailInput.value === '' || expresiones.email.test(emailInput.value) === false){
    validEmail = false;
    emailInput.classList.add('popup__newslform--border-red');   
} 
else{
    validEmail = true;
    emailInput.classList.remove('popup__newslform--border-red');
    emailInput.classList.add('popup__newslform--border-green');
}

if (validName === true && validEmail == true){
  
  newslApi(nameInput.value,emailInput.value); 
  
  nameInput.value = '';
  emailInput.value = '';

  nameInput.classList.remove('popup__newslform--border-green');
  emailInput.classList.remove('popup__newslform--border-green');
  cerrar();

}
else if(validName === true && validEmail === false){
  window.alert('El email debe de ser válido y no puede estar vacio.')
} 
else{
  window.alert('El nombre no puede contener carácteres especiales ni espacios ni estar vacio.')
}
})

const newslApi = (nameForm, emailForm) => {
  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          name: nameForm,
          email: emailForm,
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then(response => {
      if (response.ok) {
          window.alert("Te has suscrito a la newsletter!");
          return response.json();
      }
      throw new Error('Error');
  })
  .then(data => {
      console.log(data);
  })
  .catch((e) => console.log(e))
}
});

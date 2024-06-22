const formulario = document.getElementById('form');
const url = 'https://jsonplaceholder.typicode.com/posts'

const expresiones = {
    name: /^[A-Za-z]{2,100}$/,
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
    document.querySelector('.contact__form__container--error--name').style.display = 'none';
    document.querySelector('.contact__form__container--error--email').style.display = 'none';

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = event.target.name;
    const emailInput = event.target.email;
    const checkBox = event.target.consent;

    let validCheckbox;
    let validName;
    let validEmail;

    if (nameInput.value === '' || expresiones.name.test(nameInput.value) === false){
        validName = false;
        nameInput.classList.add('contact__form__container--border--red');
        document.querySelector('.contact__form__container--error--name').style.display = 'block';    
    } 
    else{ 
        validName = true;
        nameInput.classList.remove('contact__form__container--border--red');
        nameInput.classList.add('contact__form__container--border--green');
        document.querySelector('.contact__form__container--error--name').style.display = 'none';   
    }

    if (emailInput.value === '' || expresiones.email.test(emailInput.value) === false){
        validEmail = false;
        emailInput.classList.add('contact__form__container--border--red');
        document.querySelector('.contact__form__container--error--email').style.display = 'block';       
    } 
    else{
        validEmail = true;
        emailInput.classList.remove('contact__form__container--border--red');
        emailInput.classList.add('contact__form__container--border--green');
        document.querySelector('.contact__form__container--error--email').style.display = 'none'; 
    }
    
    if(!checkBox.checked){
        validCheckbox = false;
    }
    else{
        validCheckbox = true;
    }

    if (validName === true && validCheckbox == true && validEmail == true){
        document.querySelector('.contact__form__msj').style.display = 'none';
        
        formApi(nameInput,emailInput); 
        
        nameInput.value = '';
        emailInput.value = '';
        checkBox.checked = false;

        nameInput.classList.remove('contact__form__container--border--green');
        emailInput.classList.remove('contact__form__container--border--green');
    } 
    else{
        document.querySelector('.contact__form__msj').style.display = 'block';
    }

    
});


const formApi = (nameInput,emailInput) =>{
    
    fetch('url', {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          checkBox: true,  
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json()).catch((e) => console.log(e))
        .then(window.alert("Formulario rellenado correctamente!"))
}
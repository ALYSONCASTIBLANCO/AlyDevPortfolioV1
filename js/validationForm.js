// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelector('.contact-form');

    forms.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
        /*The checkValidity() method is part of the HTML5 Constraint Validation API and is used to check whether a form or form element meets 
all its validation constraints (like required, pattern, min, max, etc.).*/
if (!forms.checkValidity()) {
    forms.classList.add('was-validated');
    return;
  }
  forms.classList.add('was-validated');
fetch("https://formsubmit.co/ajax/castiblanco.castaneda.alyson.val@gmail.com", {
    method: "POST",
    headers: { 
        'Accept': 'application/json'
    },
    body: new FormData(event.target)
})
    .then(response => response.json())
    .then(data=>{alert("Your message has been sent successfully!")
        forms.reset();
        forms.classList.remove('was-validated');
    })
    .catch(error => {console.log(error)
    let message=error.statusText||"An error has occurred. Try to send it again."
    alert("Error "+error.status+": "+message)});
}, false)
})
()
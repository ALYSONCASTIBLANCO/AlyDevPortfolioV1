//When is clicked the gmail icon, the email is copied.

let buttonCopy=document.getElementById('mail-button');
let mail='castiblanco.castaneda.alyson.val@gmail.com';
buttonCopy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(mail);
    let copied=document.createElement('i');
    let copiedText=document.createTextNode('Copied!');
    copied.appendChild(copiedText);
    copied.setAttribute('class', 'copied');
    buttonCopy.appendChild(copied);
    setTimeout(()=>{
        buttonCopy.removeChild(copied);
    }, 2000);
})
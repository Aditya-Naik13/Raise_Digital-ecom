const toggleCollapse=document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');


toggleCollapse.onclick = ()=>{
    nav.classList.toggle('collapse');
}

function validation()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;


var usercheck = /^[A-Za-z]{3,30}$/;
var emailcheck = /^[A-Za-z-.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,10}$/;

if (usercheck.test(name)){
    document.getElementById('errorname').innerHTML=" ";
}
else{
    document.getElementById('errorname').innerHTML="Invalid Name";
    return false;
}
if (emailcheck.test(email)){
    document.getElementById('erroremail').innerHTML=" ";
}
else{
    document.getElementById('erroremail').innerHTML="Invalid email";
    return false;
}


}
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


    const scriptURL = 'https://script.google.com/macros/s/AKfycby5kYwWec1VTehiGcJKL_5Ep_e03OB0WTSL8xH5mXaWx82XBXpUgDAa-7NjRdJnBOTH/exec'
    const form = document.forms['Submit-googlesheet']
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting!...will reach right back to you."))
        .catch(error => console.error('Error!', error.message))
    })
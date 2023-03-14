
// retirieving html elements from the DOM
const form = document.getElementById('form');
const username =document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//function to update class and message for errors
function showError(input,message) {
    //get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    //override the class - add error
    formControl.className = 'form-control error';
    //get the small element for the error message
    const small = formControl.querySelector('small');
    //override the text for small element using the input message
    small.innerText = message;
    
}

//function to update class for success
function showSuccess(input) {
    //get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    //override the class - add success
    formControl.className = 'form-control success';


}

//Event listeners
//create event listner for submit
form.addEventListener('submit', function(e) {
    //stop page from reloading on submit
    e.preventDefault();

    //check if username input is empty
    if ( username.value === '') {
        showError(username, 'User name is required');
    } else {
        showSucccess(username);
    }

     //check if username input is empty
     if ( email.value === '') {
        showError(email, 'Email is required');
    } else {
        showSucccess(email);
    }

     //check if username input is empty
     if ( password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSucccess(password);
    }

     //check if username input is empty
     if ( password2.value === '') {
        showError(password2, ' Confirm Password is required');
    } else {
        showSucccess(password2);
    }
});


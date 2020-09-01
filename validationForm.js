

const sign_in_form = document.querySelector('.sign-in-form');
const sign_up_form = document.querySelector('.sign-up-form')
const username = document.getElementById('username');
const password = document.getElementById('password');
const input_field = document.querySelector('.input-field');

let usernameS = document.getElementById('usernameS');
let pass1 = document.getElementById('passwordS');
const email = document.getElementById('email');
const pass2 = document.getElementById('passwordS2');

loaderFunction();

function loaderFunction(){
    sign_in_form.addEventListener('submit',validateForm);
    sign_up_form.addEventListener('submit',validateFormSignUp)
}
function showError(input , message){
    const form_control=input.parentElement;
    form_control.className ='input-field error';
    const small = form_control.querySelector('small');
    small.innerText = ` ${message}`
}
function showSuccess(input){
    input.parentElement.className ='input-field success'
}

function inputFieldName (input){
    return input.placeholder.charAt(0).toUpperCase()+ input.placeholder.slice(1);
}
function checkRequired(ArrInput){
    ArrInput.forEach(input=>{
        if(input.value.trim()===''){
            showError(input,`${inputFieldName(input)} its required`)
        }else{
            showSuccess(input)
        }
    })
}
function checkLength(input,min,max){
    if (input.value.length < min) {
        showError(
          input,
          `${inputFieldName(input)} must be at least ${min} characters`
        );
      } else if (input.value.length > max) {
        showError(
          input,
          `${inputFieldName(input)} must be less than ${max} characters`
        );
      } else {
        showSuccess(input);
      }
}

function validateForm(e){
    e.preventDefault();
    checkRequired([username,password])
    checkLength(username,3,10)
    checkLength(password,3,8);
 
}



function checkConfirmPass(pass1, pass2){
if(pass2.value !== pass1.value){
showError(pass2 , `${inputFieldName(pass2)} its Not Match`)
}
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Email is not valid');
      }
}
function validateFormSignUp(e){
    e.preventDefault();
    checkRequired([usernameS,email,pass1,pass2])
    checkLength(username,3,10)
    checkLength(password,3,8);
    checkConfirmPass(pass1,pass2);
    checkEmail(email)
 
}
const show = document.querySelector('.sign-in-form i.far');


    
show.addEventListener('click',()=>{
showPassword(password , show)
})



//login show password
function showPassword(input,className,i){
   if(input.value.trim()!=='' && input.type=== 'password')
        {
            input.type='text';
            className.classList.remove('fa-eye')
            className.classList.add('fa-eye-slash')
        }else{
            input.type='password';
            className.classList.add('fa-eye')
            className.classList.remove('fa-eye-slash')
        }
  }
//signup showpassword
  document.getElementById("showpasswords").addEventListener("click",function() {
    [...document.querySelectorAll(".password",'.sign-up-form .input-field i.far')].forEach(p =>{

        if(p.type==='password'){
            p.type='text';
            p.previousElementSibling.classList.remove('fa-eye');
            p.previousElementSibling.classList.add('fa-eye-slash') 
        }else{
            p.type='password';
            p.previousElementSibling.classList.add('fa-eye');
            p.previousElementSibling.classList.remove('fa-eye-slash') 
        }
    }
       
    );
    
  })

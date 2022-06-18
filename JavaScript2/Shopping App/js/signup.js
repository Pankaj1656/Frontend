const signUp=document.getElementById('signUp');

let firstNameFeild=document.getElementById('firstName')
let lastNameFeild=document.getElementById('lastName')
let emailFeild=document.getElementById('inputEmail4')
let passwordFeild=document.getElementById('inputPassword4')

let firstNameValid=document.getElementsByClassName('valid-feedback')[0];
let firstNameInvalid=document.getElementsByClassName('invalid-feedback')[0];
signUp.addEventListener('click', ()=>{
    const jumbo=document.getElementById('jumbotron')
    const loading=document.getElementById('loading')
    const signUpPage=document.getElementById('signUp-page')
    const aboutUs=document.getElementById('aboutUs')
    const contactUs=document.getElementById('contactUs')
    const logInButton=document.getElementById('logInButton')
    contactUs.style.display='none'
    aboutUs.style.display='none'
    logInButton.style.display='none'

    jumbo.style.display='none'
    loading.style.display='none'

    signUpPage.style.display='block'

})

function validate(){
  if(firstNameFeild.length<=3){
    firstNameValid.style.display='none'
    firstNameInvalid.style.display='block'
  }  
}

















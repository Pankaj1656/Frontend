const logIn = document.getElementById("logIn");

logIn.addEventListener("click", () => {
  const jumbo=document.getElementById('jumbotron')
  const loading=document.getElementById('loading')
  const signUpPage=document.getElementById('signUp-page')
  const aboutUs=document.getElementById('aboutUs')
  const contactUs=document.getElementById('contactUs')
  const logInButton=document.getElementById('logInButton')
  contactUs.style.display='none'
  signUpPage.style.display='none'
  aboutUs.style.display='none'
  jumbo.style.display='none'
  loading.style.display='none'
  logInButton.style.display='block'
});

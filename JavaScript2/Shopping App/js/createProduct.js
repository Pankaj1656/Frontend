const product=document.getElementById('product')

product.addEventListener('click',()=>{
  const signUpPage=document.getElementById('signUp-page')
  const jumbo=document.getElementById('jumbotron')
  const loading=document.getElementById('loading')
  const aboutUs=document.getElementById('aboutUs')
  const contactUs=document.getElementById('contactUs')
  const logInButton=document.getElementById('logInButton')
  aboutUs.style.display='block'
  contactUs.style.display='block'
  logInButton.style.display='none'
  signUpPage.style.display='none'
  jumbo.style.display='block'
  loading.style.display='block'
})
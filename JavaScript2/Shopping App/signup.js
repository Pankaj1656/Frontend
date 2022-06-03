const signUp=document.getElementById('signUp');

signUp.addEventListener('click', ()=>{
    const jumbo=document.getElementById('jumbotron')
    const loading=document.getElementById('loading')
    const signUpPage=document.getElementById('signUp-page')

    jumbo.style.display='none'
    loading.style.display='none'

    signUpPage.style.display='block'
})
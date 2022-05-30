const name1=document.getElementById('name')

// console.log(name1.innerText)

const email1=document.getElementById('email')
// console.log(email1.innerText)

const phone1=document.getElementById('Phone')

const dogName1=document.getElementById('dogName')

const dogColor1=document.getElementById('dogColor')

const dogBreed1=document.getElementById('dogBreed')




const submitBtn=document.getElementById('submitButton')

submitBtn.addEventListener('click', ()=>{
    console.log(name1.value)
    console.log(email1.value)
    console.log(phone1.value)
    console.log(dogName1.value)
    console.log(dogColor1.value)
    console.log(dogBreed1.value)
})
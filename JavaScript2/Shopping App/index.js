const cartItemLength=document.getElementById('cart-items-length')

const cartItem=[]

const addToCart  =(id) =>{
    cartItem.push(id)
    cartItemLength.innerText=cartItem.length
}
const productSpinner = document.getElementById("spinner");

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  productSpinner.style.display = "none";
  data.forEach((product) => createProductDiv(product));
};

document.querySelectorAll('a[href6="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoVeiw({
      behavior: "smooth",
    });
  });
});

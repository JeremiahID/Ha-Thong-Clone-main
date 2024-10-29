// script for background
const Hero =  document.querySelector('.hero');
const images = ['../Images/hero-cover.jpg', '../Images/hero-cover-two.jpg','../Images/hero-cover-four.jpeg','../Images/hero-cover-six.jpeg'];
let index = 0;
function changeBackground(){
    index = (index + 1) % images.length;
    Hero.style.backgroundImage = `url(${images[index]})`;
    Hero.style.backgroundSize = 'cover';
   
}
// caaling the function and setting the time frame for the background change.
setInterval(changeBackground, 5000);


// GET CART UI TAG
const Cart =  document.querySelector('#cart-menu');
const cartConatainer = document.querySelector('.cart-conatianer');
const closeCart = document.querySelector('#close-cart');

Cart.addEventListener('click', ()=>{
    console.log('working')
    //CONDITONAL CART DISPLAY CHECK
    if(cartConatainer.style.display === 'none'){
        cartConatainer.style.display = 'block';
    } else {
        cartConatainer.style.display = 'none';
    }
})


closeCart.addEventListener('click', ()=>{
    console.log('working')
    //CONDITONAL CART DISPLAY CHECK
    if(cartConatainer.style.display === 'block'){
        cartConatainer.style.display = 'none';
    } else {
        cartConatainer.style.display = 'block';
    }
})


// CHANGING THE HEADER BACKGROUND COLOR WHILE SCROLLING
window.addEventListener('scroll', function() {
    var scroll = window.scrollY; // 
    var header = document.querySelector('header'); // 
    
    if (scroll >= 50) {
        header.classList.add('black'); // Add the 'black' class
    } else {
        header.classList.remove('black'); // Remove the 'black' class
    }
});

// GETTING THE HAMBURGER and NAVIGATIONS UI
const hambuger = document.querySelector('#hambuger-menu');
const Nav = document.querySelector('.navigations');
const CloseNav = document.querySelector('#close-nav');

// ADDING EVENT LISTENER TO THE HAMBUGER UI
hambuger.addEventListener('click', ()=>{
    if(Nav.style.display === 'none' ){
        Nav.classList.add('transit');
        Nav.style.display = 'block';
       
    } else {
        Nav.style.display = 'none';
    }

});

// ADDING EVENT LISTENER TO THE NAVIGATION UI

CloseNav.addEventListener('click', ()=>{
    if(Nav.style.display === 'block' ){
        Nav.classList.add('transit');
        Nav.style.display = 'none';
       
    } else {
        Nav.style.display = 'block';
    }

});

// EMAIL VALIDATION
const Subscribe = document.querySelector('#subscribe');
const Email = document.querySelector('#email');

console.log(typeof Email)
Subscribe.addEventListener('click', ()=>{
    if(Email.value === ''){
        alert('email field cannot be empty')
    } else if(Email.value !== ''){
        alert('email subscription successful..!')
        Email.value = '';
    } else {

    }

})
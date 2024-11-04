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

Cart.addEventListener('click', (event)=>{
    event.preventDefault();
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



// VALIDATING THE USER EMAIL
function validateEmail(email) {

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); // Returns true if valid, false otherwise
}

// EMAIL VALIDATION
const Subscribe = document.querySelector('#subscribe');
const Email = document.querySelector('#email');


// EVENT LISTENER FOR THE SUSCRIBE BUTTON
Subscribe.addEventListener('click', ()=>{
    if(Email.value === ''){
        alert('email field cannot be empty');
    } else if(Email.value !== ''){
        if (validateEmail(Email.value)) {
            alert('email subscription successful..!')
            Email.value = '';
        } else {
            alert("Invalid email");
            
        }
    

    } else {

    }


});

// FAVORITE TWICKING
const Fav = document.querySelector('#favorite-icon');
const Svg = document.querySelector('.svg')
var solid , outline;
// Adding event listener
Fav.addEventListener('click', ()=>{
    solid =  `<svg class="favorite" id="favorite-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>`;
    outline = `<svg class="favorite" id="favorite-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`
   
    if(Svg.innerHTML = outline){
        Svg.innerHTML = `${solid}`;
        console.log('solid');
    } else if(Svg.innerHTML = solid ){
        Svg.innerHTML = `${outline}`;
        console.log('outline')
    } else{
        console.log('test')
    }


});


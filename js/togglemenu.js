// Toggle menu navbar for mobile screens

/* Resource: 17 Beautiful JavaScript Menus You'll Love [Examples] (6. Navigation Menu) 
   https://alvarotrigo.com/blog/javascript-menus/ */
// Direct link: https://codepen.io/alvarotrigo/pen/KKQzbvJ   
/* Changes made: 
  -clases & variables names (including in css,html)
  -CSS is not entirely same
  -added comments  */
 
// Select the .navbar-mobile-button & nav ul
const navbar_toggleButton = document.querySelector('.navbar-mobile-button');
const navbar_Links = document.querySelector('nav ul');

// an event listener for navbar toggle button & links
navbar_toggleButton.addEventListener('click', () => {
  /* When the button is clicked, toggle the 'active' class on the nav ul to display 
     the links */
  navbar_Links.classList.toggle('active');
  /* And, toggle the 'change' class on the .navbar-mobile button for bun-1, bun-2 & patty
     to make a cross when clicked */
  navbar_toggleButton.classList.toggle('change');
});

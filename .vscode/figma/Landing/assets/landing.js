function toggleMenu(dispalyState){
const nav = document.getElementById('header_navigation');
const closeIcon = document.getElementById('close-icon');

nav.style.display = dispalyState;
closeIcon.style.display = dispalyState;
}
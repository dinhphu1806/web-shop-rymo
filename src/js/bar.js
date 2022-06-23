const navBar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navBar.classList.toggle('active');
}

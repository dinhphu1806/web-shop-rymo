const navBar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');

const user = document.querySelector('#user');
const userSub = document.querySelector('.user-sub');
const userList = document.querySelector('.user-list')

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navBar.classList.toggle('active');
}

user.onclick = () => {
   userSub.classList.toggle('show');
}

userList.addEventListener('click', function(event) {
   event.stopPropagation()
})
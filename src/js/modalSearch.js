// const searchForm = document.querySelector('.search-form');
// const cartForm = document.querySelector('.cart-form');


// //serach-btn
// const searchBtn = document.querySelector('#search-btn');

// searchBtn.onclick = () => {
//     searchForm.classList.toggle('show');
//     cartForm.classList.remove('show')
// }

// // cart-btn
// const cartBtn = document.querySelector('#cart-btn');

// cartBtn.onclick = () => {
//     searchForm.classList.remove('show')
//     cartForm.classList.toggle('show')
// }
// // bars
// const navBar = document.querySelector('.navbar');
// const menuBtn = document.querySelector('#menu-btn');

// menuBtn.onclick = () => {
//     menuBtn.classList.toggle('fa-times');
//     navBar.classList.toggle('active');
//     searchForm.classList.remove('show');
//     cartForm.classList.remove('show')
//  }
// // khi lăn chuột thì sẽ mất

// window.onscroll = () => {
//     searchForm.classList.remove('show');
//     cartForm.classList.remove('show');
//     navBar.classList.remove('active')
// }
// ----------------------------------------------------
// cart-btn
// const cart = document.querySelector('.cart');
// const cartBtns = document.querySelector('#cart-btn');
// const cartClose = document.querySelector('.cart-close-js');
// const cartContainer = document.querySelector('.cart-container-js');

// function showCart() {
//     cart.classList.add('open')
// }

// function hideCart() {
//     cart.classList.remove('open')
// }

// for(const cartBtn of cartBtns) {
//     cartBtn.addEventListener('click', showCart)
// }

const btnSearchs = document.querySelector('#search-pc');
const modalSearch = document.querySelector('.js-modal-search');
const modalContainerSearch = document.querySelector('.js-modal-container-search');
const modalCloseSearch = document.querySelector('.js-modal-close-search');


function showModalSearch() {
    modalSearch.classList.add('open');
}

function hideModalSearch(){
    modalSearch.classList.remove('open');
}
// for(const btnSearch of btnSearchs){
//     btnSearch.addEventListener('click', showModalSearch);
// }
btnSearchs.addEventListener('click', showModalSearch);

modalSearch.addEventListener('click', hideModalSearch);
modalCloseSearch.addEventListener('click', hideModalSearch);

modalContainerSearch.addEventListener('click', function(event) {
    event.stopPropagation();
})



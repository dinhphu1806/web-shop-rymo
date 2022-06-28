const loginBtns = document.querySelectorAll('#login-btn');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.modal-close');

function showModal() {
    modal.classList.add('open');
}
 
function hideModal() {
    modal.classList.remove('open');
}

for(const btn of loginBtns) {
    btn.addEventListener('click', showModal)
}

modal.addEventListener('click', hideModal);

modalClose.addEventListener('click', hideModal);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})
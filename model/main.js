const openModal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector ('.modal__close')
const body = document.body

openModal.addEventListener ('click', () => {
    modal.classList.remove ('modal--close')
    body.classList.add ('body--fixed')
})
closeModal.addEventListener('click',() => {
    modal.classList.add ('modal--close')
    body.classList.remove ('body--fixed')
} )
document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        modal.classList.add('modal--close');
        body.classList.remove ('body--fixed')
    }
});
(function () {
    document.addEventListener('click', burgerNav)
    function burgerNav(e) {
        const burgerIcon = e.target.closest('.burger')
        const burgerNavLink = e.target.closest('.nav__list-link')
        if (!burgerIcon && !burgerNavLink) return
        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else (document.body.classList.remove('body--open-menu'))
    }

    const openButton = document.querySelector('.myinfo__img-button')
    const closeModalButton = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal')
    const body = document.body



    openButton.addEventListener('click', () => {
        document.body.classList.add('body--opened-modal')
    })

    modal.addEventListener('click', closeModal)
    function closeModal(e) {
        if (e.target.closest('.modal__close') || e.target === modal) {
            e.preventDefault()
            body.classList.remove('body--opened-modal')
        }
        document.addEventListener('keydown', event => {
            if (event.code === 'Escape') {
                body.classList.remove('body--opened-modal')
            }
        })
    }

})()
(function () {
    // бургер
    document.addEventListener('click', burgerNav)
    function burgerNav(e) {
        const burgerIcon = e.target.closest('.burger')
        const burgerNavLink = e.target.closest('.nav__list-link')
        if (!burgerIcon && !burgerNavLink) return
        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else (document.body.classList.remove('body--open-menu'))
    }
    // модалка
    const openButtonModal = document.querySelector('.myinfo__img-button')
    const closeModalButton = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal')
    const body = document.body



    openButtonModal.addEventListener('click', () => {
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
    // tab
    const tabControls = document.querySelector('.tab-controls')
    tabControls.addEventListener('click', switchTab)
    function switchTab(e) {
        const tabControl = e.target.closest('.tab-controls__link')
        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeContol = document.querySelector('.tab-content--show')
        const contentActive = document.querySelector('.tab-controls__link--active')
        activeContol.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')
        contentActive.classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')
    }
    // accordion
const accordionLists = document.querySelectorAll('.accordion-list');
accordionLists.forEach(element => {
    element.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;
        const accordionActive = accordionItem.classList.contains('accordion-list__item--opened');
        if (!accordionActive) {
            const openedItems = element.querySelectorAll('.accordion-list__item--opened');
            openedItems.forEach(item => {
                item.classList.remove('accordion-list__item--opened');
                const contentAccordion = item.querySelector('.accordion-list__content');
                if (contentAccordion) contentAccordion.style.maxHeight = null;
            });
        }
        accordionItem.classList.toggle('accordion-list__item--opened');
        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});
})()


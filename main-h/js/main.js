(function() {
document.addEventListener ('click', burgerNav)
function burgerNav(e) {
    const burgerIcon = e.target.closest('.burger')
    const burgerNavLink = e.target.closest('.nav__list-link')
    if (!burgerIcon && !burgerNavLink) return
    if(!document.body.classList.contains('body--open-menu')) {
        document.body.classList.add('body--open-menu')
    } else(document.body.classList.remove('body--open-menu'))
}
})()
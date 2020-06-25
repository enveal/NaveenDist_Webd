let navlinks = $('.navbar-nav .nav-link')
console.log(navlinks)
navlinks.click((event) => {
    let componentUrl = `/components/${$(event.target).attr('data-component')}.html`
    console.log(componentUrl)
    $('#content').load(componentUrl)
})
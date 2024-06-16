// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// scroll Sections
let Sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    Sections.array.forEach(element => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
        //active navbar links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
});
    //stcky header
    let header = document.querySelector('header');
    header.classList.toogle('sticky',window.scrollY>100);
}
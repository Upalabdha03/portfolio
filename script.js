let menuIcon = document.querySelector('#menu-Icon');
let navbar= document.querySelector('.navbar');
let sections = document.querySelector('.section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.array.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute(id);
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ')').classList.add('active')
            })
        }
    });
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
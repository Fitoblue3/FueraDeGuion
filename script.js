const btnToggle = document.querySelector('#btnToggle');
const toggleIcon = document.querySelector('#toggleIcon')
const navLinks = document.querySelector('#navLinks')
const menuItems = document.querySelectorAll('.links a')

btnToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) toggleIcon.textContent = 'close';
    else toggleIcon.textContent = 'menu';
  
});

menuItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleIcon.textContent = 'menu';
    });
});

revealOnScroll = () => {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementoTop = reveals[i].getBoundingClientRect().top;

        var isDesktop = window.innerWidth > 768;

        var elementVisible = isDesktop ? 350 : 150;
        

        if (elementoTop < windowHeight - elementVisible) reveals[i].classList.add('active');
    }
}

window.addEventListener('scroll', revealOnScroll);
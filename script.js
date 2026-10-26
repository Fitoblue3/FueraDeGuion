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
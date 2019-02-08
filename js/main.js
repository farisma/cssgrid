const menuBtn = document.querySelector('.menu-btn');
const btnLine = document.querySelector('.btn-line');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click',toggleMenu);
let showMenu = false;
function toggleMenu(){
    if(!showMenu) {
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => {
            item.classList.add('show');
            showMenu=true;
            
        });
    }
    else{
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => {
            item.classList.remove('show');
            showMenu=false;
            
        });
    }
    
}

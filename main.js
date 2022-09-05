const menu * document.queryselector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classlist.toggle('is-active');
    menu.classlist.toggle('active');
})

window.addEventListener("scroll",function(){
  let header = document.querySelector('#header');
  header.classList.toggle('rolagem', window.scrollY > 100);
})

// efeito menu

let btnMenu = document.getElementById('btn-menu-mob');
let menu = document.getElementById('menu-mobile');
let overlay = document.querySelector('.overlay-menu');
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');
let line3 = document.querySelector('.line-menumob-3');

// Função para alternar o menu

function toggleMenu() {
  const isMenuOpen = menu.classList.toggle('abrir-menu');
  overlay.classList.toggle('abrir-overlay', isMenuOpen);
  
  // Adiciona ou remove classes para as linhas do botão

  line2.classList.toggle('ativo1', isMenuOpen);
  line3.classList.toggle('ativo2', isMenuOpen);
}

// Abre/fecha o menu ao clicar no botão de menu

btnMenu.addEventListener('click', toggleMenu);

// Fecha o menu e o overlay ao clicar no overlay

overlay.addEventListener('click', () => {
  menu.classList.remove('abrir-menu');
  overlay.classList.remove('abrir-overlay');
  line2.classList.remove('ativo1');
  line3.classList.remove('ativo2');
});

// Fecha o menu e o overlay ao clicar fora deles

window.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !btnMenu.contains(event.target) && !overlay.contains(event.target)) {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('abrir-overlay');
    line2.classList.remove('ativo1');
    line3.classList.remove('ativo2');
  }
});


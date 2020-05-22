// menu burger

let header__burger = document.getElementById('burger_menu');
let header__menu = document.getElementById('header_menu');

header__burger.onclick = function () {
  header__burger.classList.toggle('active');
  header__menu.classList.toggle('active');
}

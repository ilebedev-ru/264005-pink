var mainmenu = document.querySelector(".main-menu");
var mainmenubutton = document.querySelector(".main-menu__button");
var mainheader = document.querySelector(".main-header");

mainmenu.classList.remove("main-menu--open");
mainmenubutton.classList.remove("main-menu__button--nojs");
mainheader.classList.remove("main-header--open");

mainmenubutton.addEventListener("click", function (evt) {
    evt.preventDefault();

      mainmenubutton.classList.toggle("main-menu__button--close");
      mainmenu.classList.toggle("main-menu--open");
      mainheader.classList.toggle("main-header--open");
});

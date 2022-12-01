const openBurgerButton = document.querySelector(".burger-button_open");
const closedBurgerButton = document.querySelector(".burger-button_closed");

const burgerMenuContainer = document.querySelector(".burger-menu__container");

const checkIsOpenMenu = () => {
  if (burgerMenuContainer.classList.contains("burger-menu_closed")) {
    burgerMenuContainer.classList.remove("burger-menu_closed");
    burgerMenuContainer.classList.add("burger-menu_open");
  } else {
    burgerMenuContainer.classList.remove("burger-menu_open");
    burgerMenuContainer.classList.add("burger-menu_closed");
  }
};

burgerMenuContainer.classList.add("burger-menu_closed");

openBurgerButton.addEventListener("click", checkIsOpenMenu);
closedBurgerButton.addEventListener("click", checkIsOpenMenu);

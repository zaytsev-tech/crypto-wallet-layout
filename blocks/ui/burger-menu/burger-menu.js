const openBurgerButton = document.querySelector(".burger-button--open");
const closedBurgerButton = document.querySelector(".burger-button--closed");

const burgerMenuContainer = document.querySelector(".burger-menu");

const checkIsOpenMenu = () => {
  if (burgerMenuContainer.classList.contains("burger-menu--closed")) {
    burgerMenuContainer.classList.remove("burger-menu--closed");
    burgerMenuContainer.classList.add("burger-menu--open");
  } else {
    burgerMenuContainer.classList.remove("burger-menu--open");
    burgerMenuContainer.classList.add("burger-menu--closed");
  }
};

burgerMenuContainer.classList.add("burger-menu--closed");

openBurgerButton.addEventListener("click", checkIsOpenMenu);
closedBurgerButton.addEventListener("click", checkIsOpenMenu);

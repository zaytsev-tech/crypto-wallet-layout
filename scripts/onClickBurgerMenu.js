const openBurgerButton = document.querySelector(".burger-button_open");
const closedBurgerButton = document.querySelector(".burger-button_closed");

const burgerMenuContainer = document.querySelector(".burger-menu__container");

const checkIsOpenMenu = () => {
  if (burgerMenuContainer.style.display === "none") {
    burgerMenuContainer.style.display = "flex";
  } else {
    burgerMenuContainer.style.display = "none";
  }
};

burgerMenuContainer.style.display = "none";

openBurgerButton.addEventListener("click", checkIsOpenMenu);
closedBurgerButton.addEventListener("click", checkIsOpenMenu);

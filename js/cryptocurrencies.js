let isOpenSeeAll = false;

const seeAllButton = document.querySelector(
  ".cryptocurrencies__see-all-button"
);
seeAllButton.classList.add("primary-button--hide");

const stateSeeAllOpen = document.querySelector(".see-all-button--open");
const stateSeeAllClosed = document.querySelector(".see-all-button--closed");

const currenciesListArray = document.querySelectorAll(
  ".cryptocurrencies__lists ul"
);

if (window.innerWidth < 1024) {
  currenciesListArray[2].classList.add("cryptocurrencies--hide-list");
  currenciesListArray[3].classList.add("cryptocurrencies--hide-list");

  seeAllButton.classList.remove("primary-button--hide");

  seeAllButton.addEventListener("click", () => {
    if (!isOpenSeeAll) {
      currenciesListArray[2].classList.remove("cryptocurrencies--hide-list");
      currenciesListArray[3].classList.remove("cryptocurrencies--hide-list");

      seeAllButton.classList.add("see-all-button--closed");
      seeAllButton.classList.remove("see-all-button--open");

      isOpenSeeAll = true;
    } else {
      currenciesListArray[2].classList.add("cryptocurrencies--hide-list");
      currenciesListArray[3].classList.add("cryptocurrencies--hide-list");

      seeAllButton.classList.add("see-all-button--open");
      seeAllButton.classList.remove("see-all-button--closed");

      isOpenSeeAll = false;
    }
  });
} else {
  seeAllButton.classList.add("cryptocurrencies__see-all-arrow-icon--hide");
}

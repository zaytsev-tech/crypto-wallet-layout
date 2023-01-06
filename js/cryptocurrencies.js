let isOpenSeeAll = false;

const seeAllButton = document.querySelector(
  ".cryptocurrencies__see-all-button"
);
seeAllButton.classList.add("primary-button--hide");

const stateSeeAllOpen = document.querySelector(
  ".cryptocurrencies__see-all-arrow-icon--open"
);
const stateSeeAllClosed = document.querySelector(
  ".cryptocurrencies__see-all-arrow-icon--closed"
);

const currenciesListArray = document.querySelectorAll(
  ".cryptocurrencies__list"
);

if (window.innerWidth < 1024) {
  currenciesListArray[2].classList.add("cryptocurrencies--hide-list");
  currenciesListArray[3].classList.add("cryptocurrencies--hide-list");

  seeAllButton.classList.remove("primary-button--hide");
  stateSeeAllOpen.classList.add("cryptocurrencies__see-all-arrow-icon--hide");

  seeAllButton.addEventListener("click", () => {
    if (!isOpenSeeAll) {
      currenciesListArray[2].classList.remove("cryptocurrencies--hide-list");
      currenciesListArray[3].classList.remove("cryptocurrencies--hide-list");

      stateSeeAllOpen.classList.remove(
        "cryptocurrencies__see-all-arrow-icon--hide"
      );
      stateSeeAllClosed.classList.add(
        "cryptocurrencies__see-all-arrow-icon--hide"
      );

      isOpenSeeAll = true;
    } else {
      currenciesListArray[2].classList.add("cryptocurrencies--hide-list");
      currenciesListArray[3].classList.add("cryptocurrencies--hide-list");

      stateSeeAllOpen.classList.add(
        "cryptocurrencies__see-all-arrow-icon--hide"
      );
      stateSeeAllClosed.classList.remove(
        "cryptocurrencies__see-all-arrow-icon--hide"
      );

      isOpenSeeAll = false;
    }
  });
}

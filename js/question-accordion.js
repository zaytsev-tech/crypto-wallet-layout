let acc = document.getElementsByClassName("question-accordion__button");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    let plusIcon = this.getElementsByClassName("plus-icon")[0];
    let minusIcon = this.getElementsByClassName("minus-icon")[0];
    if (panel.style.display === "block") {
      panel.style.display = "none";

      minusIcon.style.display = "none";
      plusIcon.style.display = "block";
    } else {
      panel.style.display = "block";

      minusIcon.style.display = "block";
      plusIcon.style.display = "none";
    }
  });
}

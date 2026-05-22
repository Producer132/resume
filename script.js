const cards = document.querySelectorAll(".demo-card, .cv-card");
const detailBox = document.querySelector(".skill-detail");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }

    cards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");

    if (!detailBox) {
      return;
    }

    detailBox.querySelector("h3").textContent = card.dataset.title;
    detailBox.querySelector("p").textContent = card.dataset.detail;
  });
});

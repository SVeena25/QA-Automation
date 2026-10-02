const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const projectCount = document.querySelector("#project-count");
const currentYear = document.querySelector("#current-year");

function filterProjects(category) {
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const categories = card.dataset.categories.split(" ");
    const isVisible = category === "all" || categories.includes(category);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  projectCount.textContent = String(visibleCount).padStart(2, "0");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((filter) => {
      const isSelected = filter === button;
      filter.classList.toggle("is-active", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });

    filterProjects(button.dataset.filter);
  });
});

currentYear.textContent = String(new Date().getFullYear());
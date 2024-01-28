document.addEventListener("DOMContentLoaded", function () {
  let acc = document.getElementsByClassName("accordion-button");
  let panels = document.getElementsByClassName("panel");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      for (let j = 0; j < panels.length; j++) {
        if (panels[j] !== this.nextElementSibling) {
          panels[j].style.display = "none";
        }
      }

      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
window.addEventListener("scroll", function () {
  let header = document.querySelector("header.page-header");
  header.classList.toggle("scrolled", window.scrollY > 100);
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const arrowButtons = document.querySelectorAll(".arrows button");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.style.visibility = "visible";
      } else {
        slide.style.visibility = "hidden";
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function handleButtonClick(direction) {
    if (direction === "next") {
      currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === "prev") {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    showSlide();
  }

  arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.direction;
      handleButtonClick(direction);
    });
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide();
    });
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }, 5000);

  showSlide();
});

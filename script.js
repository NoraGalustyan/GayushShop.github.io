// НАВИГАЦИЯ

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// КАРУСЕЛЬ
const carouselTrack = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const colorButtons = document.querySelectorAll(".color-button");
const productImages = document.querySelectorAll(".product-image");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close-button");

let slideWidth = slides[0].getBoundingClientRect().width;
let currentSlide = 0;

// Функция для установки позиции слайдов
function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

// Функция для перемещения к слайду
function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide = slides.indexOf(targetSlide);
  return currentSlide;
}

// Обработчики событий для кнопок карусели
prevButton.addEventListener("click", () => {
  const targetSlide =
    currentSlide === 0 ? slides[slides.length - 1] : slides[currentSlide - 1];
  currentSlide = moveToSlide(carouselTrack, slides[currentSlide], targetSlide);
});

nextButton.addEventListener("click", () => {
  const targetSlide =
    currentSlide === slides.length - 1 ? slides[0] : slides[currentSlide + 1];
  currentSlide = moveToSlide(carouselTrack, slides[currentSlide], targetSlide);
});

// Обработчики событий для кнопок цветов
colorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const color = event.target.dataset.color;
    const card = event.target.closest(".product-card"); // Находим карточку товара
    const images = card.querySelectorAll(".product-image"); // Ищем изображения только в этой карточке

    images.forEach((image) => {
      if (image.dataset.color === color) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
  });
});

// Обработчики событий для увеличения изображений
productImages.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    imageModal.style.display = "block";

    // Скрываем кнопки prev и next
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  });
});

// Обработчики событий для закрытия модального окна
closeButton.addEventListener("click", () => {
  imageModal.style.display = "none";

  // Показываем кнопки prev и next
  prevButton.style.display = "block";
  nextButton.style.display = "block";
});

window.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.style.display = "none";

    // Показываем кнопки prev и next
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }
});

// Адаптация размера слайдов при изменении размера окна
window.addEventListener("resize", () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach(setSlidePosition);
  carouselTrack.style.transform =
    "translateX(-" + slides[currentSlide].style.left + ")";
});

// Отзывы

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-containers");
  const reviewCards = document.querySelectorAll(".review-card");

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = reviewCards[0].offsetWidth;
    const scrollAmount = cardWidth * currentIndex;
    carouselContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, reviewCards.length - 1);
    updateCarousel();
  });
});

// Вопросы

// !!!!!!!!!
// const carouselWrapper = document.querySelector(".carousel-wrapper");
// const carouselItems = document.querySelectorAll(".carousel-item");
// const itemWidth = carouselItems[0].offsetWidth; // ширина одного элемента
// let currentPosition = 0;

// function moveCarousel(direction) {
//   currentPosition += itemWidth * direction * 2; // Пролистываем по 2 элемента
//   if (currentPosition > 0) {
//     currentPosition = -(carouselItems.length - 2) * itemWidth; // Возврат к последним 2 элементам
//   }
//   if (currentPosition < -(carouselItems.length - 2) * itemWidth) {
//     currentPosition = 0; // Возврат к первым 2 элементам
//   }
//   carouselWrapper.style.transform = `translateX(${currentPosition}px)`;
// }

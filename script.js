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

// ЗАФИКСИРОВАННАЯ КНОПКА ВАТСАП
const whatsappButton = document.querySelector(".whatsapp-button");
const contactsSection = document.getElementById("contacts");

function checkVisibility() {
  const contactsSectionTop = contactsSection.offsetTop;
  const contactsSectionBottom =
    contactsSectionTop + contactsSection.offsetHeight;
  const windowBottom = window.pageYOffset + window.innerHeight;

  if (
    windowBottom > contactsSectionTop &&
    window.pageYOffset < contactsSectionBottom
  ) {
    // Кнопка должна исчезнуть, если секция контактов видна
    whatsappButton.style.display = "none";
  } else {
    // Иначе показываем кнопку
    whatsappButton.style.display = "flex"; // важно использовать flex, чтобы иконка отображалась
  }
}

// Проверяем при загрузке страницы и при прокрутке
window.addEventListener("load", checkVisibility);
window.addEventListener("scroll", checkVisibility);

//КНОПКА ВВЕРХ
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // когда прокрутка более 100px
    scrollToTopBtn.style.display = "block"; // или для плавного появления - менять opacity и visibility
    // Или, если используете opacity:
    // scrollToTopBtn.style.opacity = '1';
    // scrollToTopBtn.style.visibility = 'visible';
  } else {
    scrollToTopBtn.style.display = "none";
    // Или для плавного затухания:
    // scrollToTopBtn.style.opacity = '0';
    // scrollToTopBtn.style.visibility = 'hidden';
  }
});

// Обработчик клика для возвращения наверх
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ГАЛЕРЕЯ
const carouselContainer = document.querySelector(".carousel-container");
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let itemWidth;
let currentPosition = 0;
let itemsPerSlide = 2; // По умолчанию 2 элемента на слайд

// Функция для определения количества элементов на слайд
function updateItemsPerSlide() {
  if (window.innerWidth <= 820) {
    itemsPerSlide = 1; // 1 элемент на мобильных
  } else {
    itemsPerSlide = 2; // 2 элемента на больших экранах
  }
  itemWidth = carouselItems[0].offsetWidth; // Обновляем ширину элемента
}

// Вызываем функцию при загрузке и изменении размера окна
updateItemsPerSlide();
window.addEventListener("resize", updateItemsPerSlide);

function moveCarousel(direction) {
  updateItemsPerSlide(); // Обновляем количество элементов на слайд перед каждым движением
  currentPosition += itemWidth * direction * itemsPerSlide;

  // Ограничения для прокрутки
  if (currentPosition > 0) {
    currentPosition = 0;
  } else if (
    currentPosition <
    -(carouselItems.length - itemsPerSlide) * itemWidth
  ) {
    currentPosition = -(carouselItems.length - itemsPerSlide) * itemWidth;
  }

  carouselWrapper.style.transform = `translateX(${currentPosition}px)`;
}

// Обработчики событий для кнопок
prevButton.addEventListener("click", () => moveCarousel(1)); // Исправлено: 1 для "назад"
nextButton.addEventListener("click", () => moveCarousel(-1)); // Исправлено: -1 для "вперед"

// Сенсорное управление
let touchStartX = 0;
let touchEndX = 0;

carouselWrapper.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselWrapper.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchStartX - touchEndX;
  const swipeThreshold = 50; // Минимальное расстояние для определения свайпа

  if (swipeDistance > swipeThreshold) {
    // Свайп влево (вперед)
    moveCarousel(-1);
  } else if (swipeDistance < -swipeThreshold) {
    // Свайп вправо (назад)
    moveCarousel(1);
  }
}

// ОТЗЫВЫ

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

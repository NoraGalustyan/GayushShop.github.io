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
// Получаем элементы
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

// Вешаем обработчик на все фото в галерее
document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"; // показываем окно
    modalImg.src = img.src; // вставляем выбранное фото
  });
});

// Обработчик клика по окну — закрываем при клике в любое место вне фото
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

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

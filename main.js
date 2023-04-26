// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".next",
//       prevEl: ".prev",
//     },
//   });

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const icon = question.querySelector("i");
  const answer = question.nextElementSibling;
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    answer.classList.toggle("active");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  });
});

  
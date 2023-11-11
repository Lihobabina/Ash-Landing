const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-slide',
  },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
      bulletClass: 'my-bullet', 
      bulletActiveClass: 'my-bullet-active',
    },
    allowTouchMove: true,
    spaceBetween: 20,
  });
  // 
let questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', (event) => {
        event.preventDefault(); 
        question.nextElementSibling.classList.toggle('answer-active');
    });
});
// 
let hamburger = document.querySelector('.hamburger-menu');
let mobMenu = document.querySelector('.menu-mob');
hamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    hamburger.classList.toggle('hamburger-active');
    mobMenu.classList.toggle('menu-mob-active')
})
// ..
// Функция для обработки изменений видимости элемента
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target); // Прекращаем отслеживание после запуска анимации
      }
  });
}

// Создаем Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

// Находим элемент и начинаем отслеживание
const imgElement = document.querySelector('.tablet-home-img');
observer.observe(imgElement);


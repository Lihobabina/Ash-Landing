const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Делает пагинацию кликабельной
      bulletClass: 'my-bullet', // Свой класс для каждого пункта пагинации
      bulletActiveClass: 'my-bullet-active', // Свой класс для активного пункта пагинации
    },
    allowTouchMove: true,
    spaceBetween: 20,
  });
let questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', (event) => {
        event.preventDefault(); // предотвращаем стандартное действие браузера
        question.nextElementSibling.classList.toggle('answer-active');
    });
});

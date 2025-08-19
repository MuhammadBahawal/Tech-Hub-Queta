// navbar
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
// Home-Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// faq's


document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      // Toggle the active state for the button
      button.classList.toggle('active');

      // Toggle the content display
      if (content.classList.contains('show')) {
          content.classList.remove('show');
      } else {
          // Hide all other contents
          document.querySelectorAll('.accordion-content').forEach(c => {
              c.classList.remove('show');
          });
          content.classList.add('show');
      }
  });
});


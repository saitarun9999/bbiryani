document.addEventListener('DOMContentLoaded', function() {
     const categoryButtons = document.querySelectorAll('.category-btn');
     const menuItems = document.querySelectorAll('.menu-item');
 
     categoryButtons.forEach(button => {
         button.addEventListener('click', () => {
             const category = button.getAttribute('data-category');
 
             menuItems.forEach(item => {
                 if (item.getAttribute('data-category') === category || category === 'all') {
                     item.style.display = 'block';
                 } else {
                     item.style.display = 'none';
                 }
             });
         });
     });
 });

 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.app__navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

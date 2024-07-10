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


 document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.responsive-video');
    if (video) {
      video.muted = true;
      video.play();
    }
  });
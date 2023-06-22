document.addEventListener('DOMContentLoaded', function() {
    var lazyloadImages = document.querySelectorAll('img.lazyload');
  
    if ('IntersectionObserver' in window) {
      var lazyloadObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyloadImage = entry.target;
            lazyloadImage.srcset = lazyloadImage.dataset.srcset;
            lazyloadImage.src = lazyloadImage.dataset.src;
            lazyloadImage.classList.remove('lazyload');
            lazyloadObserver.unobserve(lazyloadImage);
          }
        });
      });
  
      lazyloadImages.forEach(function(lazyloadImage) {
        lazyloadObserver.observe(lazyloadImage);
      });
    }
  });
  
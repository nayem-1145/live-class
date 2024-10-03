(function ($) {


    // slider component
    $(".lv_auto_slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        arrows: false,
        fade: true,
    });




   
    // Image Lazy Load 
    document.addEventListener("DOMContentLoaded", function () {
        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    });





})(jQuery)
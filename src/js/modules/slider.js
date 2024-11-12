export function initSlider() {
    
    const desktopBtn = document.getElementById('desktopBtn');
    const mobileBtn = document.getElementById('mobileBtn');
    const desktopSlides = document.querySelectorAll('#desktopSlide, #desktopSlide2, #desktopSlide3, #desktopSlide4, #desktopSlide5');
    const mobileSlides = document.querySelectorAll('#mobileSlide, #mobileSlide2, #mobileSlide3, #mobileSlide4, #mobileSlide5');
    let currentDesktopSlide = 0;
    let currentMobileSlide = 0;
    let isDesktopActive = true;

    desktopBtn.addEventListener('click', function() {
        isDesktopActive = true;
        desktopSlides.forEach(slide => slide.classList.remove('d-none'));
        mobileSlides.forEach(slide => slide.classList.add('d-none'));
        currentDesktopSlide = 0;
        updateDesktopSlide();
    });

    mobileBtn.addEventListener('click', function() {
        isDesktopActive = false;
        mobileSlides.forEach(slide => slide.classList.remove('d-none'));
        desktopSlides.forEach(slide => slide.classList.add('d-none'));
        currentMobileSlide = 0;
        updateMobileSlide();
    });

    function updateDesktopSlide() {
        desktopSlides.forEach((slide, index) => {
            slide.classList.toggle('d-none', index !== currentDesktopSlide);
            slide.querySelector('.step').classList.toggle('active', index === currentDesktopSlide);
        });
        document.querySelector('.step-number').textContent = currentDesktopSlide + 1;
    }

    function updateMobileSlide() {
        mobileSlides.forEach((slide, index) => {
            slide.classList.toggle('d-none', index !== currentMobileSlide);
            slide.querySelector('.step').classList.toggle('active', index === currentMobileSlide);
        });
        document.querySelector('.step-number').textContent = currentMobileSlide + 1;
    }

    document.querySelectorAll('#slider .next').forEach(button => {
        button.addEventListener('click', function() {
            if (isDesktopActive && currentDesktopSlide < desktopSlides.length - 1) {
                currentDesktopSlide++;
                updateDesktopSlide();
            } else if (!isDesktopActive && currentMobileSlide < mobileSlides.length - 1) {
                currentMobileSlide++;
                updateMobileSlide();
            }
        });
    });

    document.querySelectorAll('#slider .prev').forEach(button => {
        button.addEventListener('click', function() {
            if (isDesktopActive && currentDesktopSlide > 0) {
                currentDesktopSlide--;
                updateDesktopSlide();
            } else if (!isDesktopActive && currentMobileSlide > 0) {
                currentMobileSlide--;
                updateMobileSlide();
            }
        });
    });

}
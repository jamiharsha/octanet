document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, 
                });
            }
        });
    });


    const contactForm = document.querySelector('.contact form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

       

        alert('Form submitted!'); 
        this.reset();
    });
});

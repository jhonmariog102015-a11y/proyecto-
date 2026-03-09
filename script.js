document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });


    const elementosAnimar = document.querySelectorAll('.servicio-card, .testimonio-card');

    function mostrarElementos() {
        const alturaVentana = window.innerHeight;
        elementosAnimar.forEach(elemento => {
            const posicion = elemento.getBoundingClientRect().top;
            if (posicion < alturaVentana * 0.9) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });
    }

  
    elementosAnimar.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', mostrarElementos);
    mostrarElementos();

 
    const gatoImagen = document.querySelector('.hero-imagen img');
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        gatoImagen.style.transform = `translateY(${scrollPos * 0.05}px)`;
    });

  
    const servicioCards = document.querySelectorAll('.servicio-card');
    servicioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 20px rgba(46, 204, 113, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style
}

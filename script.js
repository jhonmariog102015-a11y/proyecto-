document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    window.addEventListener('scroll', () => {
        const trigger = window.innerHeight * 0.8;
        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            if(top < trigger) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });


    cards.forEach(c => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(20px)';
        c.style.transition = 'all 0.6s ease';
    });
});
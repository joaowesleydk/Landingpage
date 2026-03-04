document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.querySelector('.contato form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado pelo contato! Responderemos em breve.');
    this.reset();
});

document.querySelectorAll('.btn-produto').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
    });
});

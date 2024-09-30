// Scroll animasyonunu ekleyelim
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-content');
    const position = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (position < screenPosition) {
        aboutSection.classList.add('about-appear');
    }
});

// CSS'ye bu animasyon için bir class ekleyelim

// Form doğrulama ve mesaj gösterme
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form alanlarını al
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basit doğrulama (alanların boş olup olmadığını kontrol et)
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-message').innerText = 'Please fill in all fields.';
    } else {
        document.getElementById('form-message').innerText = 'Thank you, ' + name + '! Your message has been sent.';
        
        // Formu temizle
        document.getElementById('contact-form').reset();
    }
});

// Reach Us bölümüne kaydırıldığında animasyon ile görünmesini sağla
window.addEventListener('scroll', function() {
    const reachSection = document.querySelector('.reach-section');
    const position = reachSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        reachSection.classList.add('reach-appear');
    }
});


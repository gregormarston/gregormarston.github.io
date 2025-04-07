// Simple script to add more interactivity later
console.log("Welcome to Gregor's website!");


    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.gallery-container img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.remove('hidden');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Optional: click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
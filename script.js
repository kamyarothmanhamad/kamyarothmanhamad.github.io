// JavaScript for lightbox gallery

// Get all images with the class 'lightbox-image'
const lightboxImages = document.querySelectorAll('.lightbox-image');

// Loop through each image and add a click event listener
lightboxImages.forEach(image => {
    image.addEventListener('click', () => {
        // Create a new 'div' element for the lightbox overlay
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');

        // Create a new 'img' element for the enlarged image
        const enlargedImage = document.createElement('img');
        enlargedImage.classList.add('enlarged-image');
        enlargedImage.src = image.src;

        // Add the enlarged image to the overlay
        overlay.appendChild(enlargedImage);

        // Add the overlay to the document body
        document.body.appendChild(overlay);

        // Add a click event listener to the overlay to close it when clicked
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

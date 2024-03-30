const imageContainer = document.getElementById('image-container');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image names
let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageContainer.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds

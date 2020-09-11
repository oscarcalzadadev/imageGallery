
let galleryImages = document.querySelectorAll('.gallery__images');
let galleryShowcase = document.querySelector('.gallery__showcase');

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', switchImage);

function switchImage(e) {
    if (galleryImages[0] === e.target) {
        galleryShowcase.style.background = "url('512px-Mario_Series_Logo.svg.png') no-repeat center";
    } 
    if (galleryImages[1] === e.target) {
        galleryShowcase.style.background = "url('mario-3d-all-stars-1024x572.jpg') no-repeat center";
        galleryShowcase.style.backgroundSize = "cover";
    } 
    if (galleryImages[2] === e.target) {
        galleryShowcase.style.background = "url('mario_kart_tour.jpg') no-repeat center";
        galleryShowcase.style.backgroundSize = "cover";
    } 
    if (galleryImages[3] === e.target) {
        galleryShowcase.style.background = "url('video-button.jpg') no-repeat center";
        galleryShowcase.style.backgroundSize = "cover";
    } 

}
}
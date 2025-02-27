let slideIndex = 0;
let slideTimer; // Added a variable to hold the timer for the slide transition

// Wait for all images to load before starting the slideshow
window.addEventListener('load', function() {
  showSlides();
});

function plusSlides(n) {
  clearTimeout(slideTimer); // Clear the existing timer
  
  // Increment the slideIndex by n
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(slideTimer); // Clear the existing timer
  
  // Reset the slideIndex to n
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // If no slide index is provided, set it to the next slide
  if (n === undefined) {
    slideIndex++;
  } else {
    slideIndex = n;
  }

  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
  
  // Start the timer for the slide transition after resetting it
  slideTimer = setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

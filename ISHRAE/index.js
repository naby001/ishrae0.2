let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
function toggleContactDetails(event) {
    event.preventDefault(); // Prevents default link behavior
    
    const contactDetails = document.getElementById('contact-details');
    
    // Toggle the display of the contact details
    if (contactDetails.style.display === 'block') {
      contactDetails.style.display = 'none';
    } else {
      contactDetails.style.display = 'block';
    }
  }
  
  // Optional: Close the contact details when clicking outside of it
  window.onclick = function(event) {
    const contactDetails = document.getElementById('contact-details');
    const helpButton = document.querySelector('.help');
  
    // If the click is outside the help button, close the contact details
    if (!helpButton.contains(event.target)) {
      contactDetails.style.display = 'none';
    }
  };
  
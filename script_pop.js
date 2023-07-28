// to scroll smoothly to top position when clicking the logo or studubuddy.com
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



// JavaScript code to add smooth scrolling to navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
 
  const bannerHeight = document.querySelector('.heading').offsetHeight; // Get the height of the fixed banner
  const offset = 260; // Adjust this value to set the space between the heading and the bottom of the banner

  for (const link of navLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetSection = document.querySelector(link.getAttribute('href'));

      // Get the position of the target element relative to the top of the document
      const targetPosition = targetSection.getBoundingClientRect().top;

      // Calculate the scroll position by subtracting the heights of the header and the fixed banner and adding the offset
      const scrollPosition = targetPosition + window.pageYOffset - bannerHeight + offset;

      // Scroll smoothly to the target element with the adjusted scroll position
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

      // Close the popup container (if open)
      closePopup();
    });
  }
});

  
  // JavaScript function to open the popup container for QR code
  function openPopupForQR() {
    console.log("QR code icon clicked!"); 
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.classList.add("show");
  
    // Add blur effect to the background
    document.body.classList.add("blur-background");
  }
  
  // JavaScript function to close the popup container
  function closePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.classList.remove("show");
  
    // Remove blur effect from the background
    document.body.classList.remove("blur-background");
  }
  
  // JavaScript function to toggle the popup container for pdf_icon and buy now
  function togglePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.classList.toggle("show");
  
    // Toggle blur effect on the background
    document.body.classList.toggle("blur-background");
  }
  
// JavaScript function to open the PDF file in a new tab
function openPDF(url) {
  window.open(url, "_blank");
}


  // JavaScript function to scroll to the "Contact Us" section with smoother scroll
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    const targetOffset = contactSection.getBoundingClientRect().top;
    const scrollStep = targetOffset / (0.5 * 1000); // Adjust the denominator to control the smoothness (0.5 seconds)
  
    let startTime = null;
    let startOffset = window.pageYOffset;
  
    // Use requestAnimationFrame with easing function to achieve smooth scrolling
    function scrollWithEasing(timestamp) {
      if (!startTime) startTime = timestamp;
      const timeElapsed = timestamp - startTime;
  
      const easeValue = easeInOutCubic(timeElapsed, startOffset, targetOffset, 0.5 * 1000); // 0.5 seconds
  
      window.scrollTo(0, easeValue);
  
      if (timeElapsed < 0.5 * 1000) {
        requestAnimationFrame(scrollWithEasing);
      }
    }
  
    requestAnimationFrame(scrollWithEasing);
  }
  
  // Easing function: Cubic ease-in-out
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
  
  // JavaScript function to open the popup container for QR icon and QR_Full.jpg
function openQrPopup() {
    console.log("QR code icon clicked!"); 
    var qrPopupContainer = document.getElementById("qrPopupContainer");
    qrPopupContainer.classList.add("show");
  }
  
  // JavaScript function to close the popup container for QR icon and QR_Full.jpg
  function closeQrPopup() {
    var qrPopupContainer = document.getElementById("qrPopupContainer");
    qrPopupContainer.classList.remove("show");
  }
  
// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
// Story content
const captions = [
  "Click the image to begin...",
  "Chapter 1: The beginning...",
  "Chapter 2: The journey...",
  "Chapter 3: The challenge...",
  "Chapter 4: The turning point...",
  "Chapter 5: The resolution..."
];
// Track current step
let currentStep = 0;
// Listen for clicks
image.addEventListener('click', function() {
  currentStep++;
  console.log('Image clicked. Current step:', currentStep);
  if (currentStep > 0 && captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];
    console.log('Caption updated:', captions[currentStep]);
    // Update image
    const newSrc = `storyassets/images/image-${currentStep}.jpg`;
    image.src = newSrc;
    console.log('Image src updated to:', newSrc);
    // Update progress dots
    updateProgress(currentStep);
  } else {
    console.log('No more steps.');
  }
  if (currentStep > 5) {
    currentStep = 0; // Reset to beginning
    image.src = 'storyassets/images/bg.jpg';
  }
});
function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

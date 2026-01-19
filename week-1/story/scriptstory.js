// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
// Story content
const captions = [
  "We're all just powerless bystanders right? At least until the consequences are felt.",
  "Indian Removal Act of 1830... Trail of Tears... Thousands died on forced marches to Oklahoma. Can't blame the people.",
  "Crystal Nacht, November 9-10, 1938... Soldiers were just following orders. It's too bad for the Jewish.",
  "It's all Hitler's fault. Can't blame the people. Democracy is messy.",
  "I.C.E raids... Families torn apart. Just following orders, right? People dying. Just a consequence of safety.",
  "It's all Trump's fault. Can't blame the people. Democracy is messy."
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
    image.src = 'storyassets/images/bg2.jpg';
    caption.textContent = captions[0];
    updateProgress(currentStep);
    console.log('Story reset to beginning.');
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

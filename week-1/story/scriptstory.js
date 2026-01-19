// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
const title = document.querySelector('.title h1');

// Create the button but don't add to DOM yet
const endButton = document.createElement('button');
endButton.textContent = "Continue";
endButton.style.display = "none";
endButton.style.position = "absolute";
endButton.style.top = "60%";
endButton.style.left = "50%";
endButton.style.transform = "translate(-50%, -50%)";
endButton.style.fontSize = "2em";
endButton.style.padding = "10px 30px";
endButton.style.borderRadius = "10px";
endButton.style.zIndex = "10";
document.body.appendChild(endButton);
// Track current step
let currentStep = 0;
// Hide caption initially
caption.style.display = "none";
// Story content
const captions = [
  "We're all just powerless bystanders right? At least until the consequences are felt.",
  "Indian Removal Act of 1830... Trail of Tears... Thousands died on forced marches to Oklahoma. Can't blame the people.",
  "Crystal Nacht, November 9-10, 1938... Soldiers were just following orders. It's too bad for the Jewish.",
  "It's all Hitler's fault. Can't blame the people. Democracy is messy.",
  "I.C.E raids... Families torn apart. Just following orders, right? People dying. Just a consequence of safety.",
  "It's all Trump's fault. Can't blame the people. Democracy is messy."
];
// Listen for clicks
image.addEventListener('click', function() {
  currentStep++;
  console.log('Image clicked. Current step:', currentStep);

  // Hide caption if currentStep is 0, show otherwise
  if (currentStep === 0) {
    caption.style.display = "none";
    endButton.style.display = "none";
  } else {
    caption.style.display = "";
  }

  if (currentStep > 0 && captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];
    console.log('Caption updated:', captions[currentStep]);
    title.textContent = ""; // Clear title after first click
    // Update image
    const newSrc = `storyassets/images/image-${currentStep}.jpg`;
    image.src = newSrc;
    console.log('Image src updated to:', newSrc);
    // Update progress dots
    updateProgress(currentStep);
    // Hide button unless on 6th slide
    if (currentStep === 6) {
      endButton.style.display = "block";
    } else {
      endButton.style.display = "none";
    }
  } else {
    console.log('No more steps.');
  }
  if (currentStep > 5) {
    currentStep = 0; // Reset to beginning
    image.src = 'storyassets/images/bg2.jpg';
    caption.textContent = captions[0];
    title.textContent = "Want to try again?"; // Reset title when story resets
    updateProgress(currentStep);
    caption.style.display = "none";
    endButton.style.display = "none";
    console.log('Story reset to beginning.');
  }
});

// Show button only when title is clicked on 6th slide
title.addEventListener('click', function() {
  if (currentStep > 5) {
    endButton.style.display = "block";
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

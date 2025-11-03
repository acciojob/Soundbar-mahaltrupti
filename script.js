//your JS code here. If required.
const buttonsContainer = document.getElementById('buttons');
const sounds = document.querySelectorAll('.btn');
let currentAudio = null;

sounds.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
  });
});

const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});


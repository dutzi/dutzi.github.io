// Party box sounds
const numPartySounds = 8;
let partySoundsLoaded = false;

function isMobile() {
  return typeof window === 'object' &&
    !!window.navigator.userAgent
      .toLowerCase()
      .match(/(mobile|iemobile|android|webos|iphone|ipad|ipod|blackberry|windows phone)/);
}

// Preload party sounds
function preloadPartySounds() {
  if (isMobile() || partySoundsLoaded) return;

  for (let i = 1; i < numPartySounds; i++) {
    new Howl({
      src: [`/sounds/party${i}.mp3`]
    });
  }
  partySoundsLoaded = true;
}

// Play a random party sound
function playPartySound() {
  if (isMobile()) return;

  const index = Math.floor(Math.random() * (numPartySounds - 1)) + 1;

  new Howl({
    src: [`/sounds/party${index}.mp3`]
  }).play();
}

// Hide party box on mobile
(function initPartyBox() {
  if (isMobile()) {
    const partyBoxes = document.querySelectorAll('.party-box-wrapper');
    partyBoxes.forEach(box => {
      box.style.display = 'none';
    });
  } else {
    // Preload sounds on desktop
    preloadPartySounds();
  }
})();

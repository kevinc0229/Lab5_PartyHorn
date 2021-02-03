// elements that we need
const volumeNumber = document.getElementById('volume-number');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-image');
const volumeSelect = document.getElementById('audio-selection');
const honkButton = document.getElementById('honk-btn');
const soundImage = document.getElementById('sound-image');
const audio = document.getElementById('horn-sound');

// event listenters
volumeNumber.addEventListener('change', (event) => {
    event.preventDefault();
    newVal = volumeNumber.value;
    volumeSlider.value = newVal;

    updateVolume(newVal);
});

volumeSlider.addEventListener('change', (event) => {
    newVal = volumeSlider.value;
    volumeNumber.value = newVal;

    updateVolume(newVal);
});

volumeSelect.addEventListener('change', (event) => {
    newSound = event.target.id;

    if (newSound == 'radio-air-horn') {
        audio.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg";
    } else if (newSound == 'radio-car-horn') {
        audio.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg";
    } else {
        audio.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg";
    }
});

honkButton.addEventListener('click', (event) => {
    event.preventDefault();
    audio.play();
});

// functions
const updateVolume = (newVal) => {
    audio.volume = newVal / 100;

    if (newVal == 0) {
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    } else if (newVal >= 1 && newVal <= 33) {
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
    } else if (newVal >= 34 && newVal <= 66) {
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
    } else {
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
    }
};
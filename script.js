let Radio = new Audio("https://synradiode.stream.laut.fm/synradiode");
let isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    Radio.load();
    Radio.pause();
  } else {
    Radio.load();
    Radio.play();
  }

  isPlaying = !isPlaying;
  updatePlayButton();
}

function RightNowPlaying() {
  setInterval(async () => {
    let url = await fetch("https://api.laut.fm/station/synradiode/current_song");
    if(url.ok) {
      let RadioData = await url.json(); 

      let PlayText = document.querySelector('.play-text');
      PlayText.innerHTML = '<a href="https://laut.fm/synradiode">' + RadioData.title + ' von ' + RadioData.artist.name + '</a>';
    }}, 3000);
}

function updatePlayButton() {
  var playButton = document.querySelector('.play-button');
  playButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}
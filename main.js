let counter = 5;

// Sayıya tıklandığında sayıyı artır
document.getElementById("increase-counter").addEventListener("click", function() {
  counter++;
  // Sayıyı göster
  document.getElementById("counter").innerHTML = counter;
  // Mesajı göster
  document.getElementById("message-text").innerHTML = "<b>DİSRACTED:<br> <b id=\"counter\">" + counter + "</b> TİMES ";
});


function playPauseAudio(playPauseButton, audioPlayer) {
    playPauseButton.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    });
  }
  
  // Her slider için playPauseAudio() fonksiyonunu çağırın
  playPauseAudio(document.getElementById('play-pause'), document.querySelector('.tech-slideshow audio'));
  playPauseAudio(document.getElementById('two'), document.querySelector('.tech-slideshow-2 audio'));
  playPauseAudio(document.getElementById('three'), document.querySelector('.tech-slideshow-3 audio'));
  
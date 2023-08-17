let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let left = document.getElementById("left");
let right = document.getElementById("right");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Play Song
left.onclick = function () {
  song.currentTime = 0;
  song.play();
  ctrlIcon.src = "https://img.icons8.com/ios-filled/20/pause--v1.png";
};


//  Right Click 10+
right.onclick = function () {
  song.currentTime = 10 + song.currentTime;
  song.play();
  ctrlIcon.src = "https://img.icons8.com/ios-filled/20/pause--v1.png";
};

// Play Pause Song.
function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.src = "https://img.icons8.com/ios-filled/20/pause--v1.png";
  } else {
    song.pause();
    ctrlIcon.src = "https://img.icons8.com/ios-filled/20/play--v1.png";
  }
}

// Update Progress Bar
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

// Progress Bar Change
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.src = "https://img.icons8.com/ios-filled/20/pause--v1.png";
};

// Pause Song
window.onload = function () {
  song.pause();
};

// KeyBoard Controls
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    playPause();
  }
  if (event.code === "ArrowLeft") {
    song.currentTime = 0;
    song.play();
    ctrlIcon.src = "https://img.icons8.com/ios-filled/20/pause--v1.png";
  }
    if (event.code === "ArrowRight") {
    song.currentTime = 10 + song.currentTime;
    song.play();
    ctrlIcon.src = "https://img.icons8.com/ios-filled/20/pause--v1.png";
    }
});









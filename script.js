const video = document.getElementById('my-video');
const playPauseButton = document.getElementById('play-pause-button');
const stopButton = document.getElementById('stop-button');
const muteUnmuteButton = document.getElementById('mute-unmute-button');
const downloadButton = document.getElementById('download-button');
const likeButton = document.getElementById('like-button');
const unlikeButton = document.getElementById('unlike-button');

let likeCount = 0;
let unlikeCount = 0;

function handlePlayClick() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
}

function handleLikeClick() {
    likeCount++;
    likeButton.innerHTML = `Like (${likeCount})`;
}

function handleUnlikeClick() {
    unlikeCount++;
    unlikeButton.innerHTML = `Unlike (${unlikeCount})`
}

playPauseButton.addEventListener('click', handlePlayClick);

stopButton.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    playPauseButton.innerHTML = 'Play';
});

muteUnmuteButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteButton.innerHTML = 'Mute';
    } else {
        video.muted = true;
        muteUnmuteButton.innerHTML = 'Unmute';
    }
});

downloadButton.addEventListener('click', function() {
    let videoSrc = 'video/Tema.mp4'; 
    let a = document.createElement('a');
    a.href = videoSrc;
    a.download = 'Tema.mp4';

    let clickEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': false
    });

    a.dispatchEvent(clickEvent);
});

likeButton.addEventListener('click', handleLikeClick);
unlikeButton.addEventListener('click', handleUnlikeClick);

video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
});
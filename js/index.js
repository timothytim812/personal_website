



const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*Function for Play &amp; Pause Buttons*/
function play() {
    var videoPlayer = document.getElementById("video1");
    var btnPlay = document.getElementById("btnPlay");
    if (videoPlayer.paused) {
    videoPlayer.play();
    btnPlay.textContent = "||";
    } else {
    videoPlayer.pause();
    btnPlay.textContent = '►';
    }
    }
    
    /*Function to Forward &amp; Rewind*/
    function forwardRewind(param) {
    var videoPlayer = document.getElementById("video1");
    videoPlayer.currentTime += param;
    }

function play2() {
    var videoPlayer = document.getElementById("video2");
    var btnPlay = document.getElementById("btnPlay2");
    if (videoPlayer.paused) {
    videoPlayer.play();
    btnPlay.textContent = "||";
    } else {
    videoPlayer.pause();
    btnPlay.textContent = '►';
    }
    }  
    /*Function to Forward &amp; Rewind*/
    function forwardRewind2(param) {
    var videoPlayer = document.getElementById("video2");
    videoPlayer.currentTime += param;
    }
    

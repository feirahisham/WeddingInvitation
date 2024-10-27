function openEnvelope() {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('bg-music').play();
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
        document.getElementById('music-control').textContent = '⏸ Music';
    } else {
        music.pause();
        document.getElementById('music-control').textContent = '▶ Music';
    }
}

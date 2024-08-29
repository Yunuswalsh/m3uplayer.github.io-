function playHLS() {
    const url = document.getElementById('hls-url').value;
    const video = document.getElementById('video-player');

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
    } else {
        alert('Tarayıcınız HLS desteği sağlamıyor.');
    }
}

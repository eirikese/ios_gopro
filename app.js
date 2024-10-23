document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoPlayer');
    var videoSrc = 'http://10.5.5.110:8080/live/amba.m3u8';

    // Check if the browser can play HLS natively (Safari on iOS)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
    } else if (Hls.isSupported()) {
        // Use hls.js to play HLS streams in other browsers
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
    } else {
        alert('Your browser does not support HLS streaming.');
    }
});

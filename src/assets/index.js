import MediaPlayer from './media-player.js';
import AutoPlay from './plugins/autoplay.js'
import AutoPause from './plugins/autopause.js'

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
});
const playButton = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
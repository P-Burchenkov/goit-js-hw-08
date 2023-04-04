import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const TIME = 'videoplayer-current-time';
const player = new Player(iframeEl);

player.on('timeupdate', throttle(onPlay, 1000));
if (!localStorage.getItem(TIME)) {
  return;
} else {
  player.setCurrentTime(localStorage.getItem(TIME));
}

function onPlay(event) {
  if (!localStorage.getItem(TIME)) {
    return;
  }
  localStorage.setItem(TIME, event.seconds);
}

import { openNavigation, closeNavigation } from './navigation';
import { pause, play } from './video-player';

document.querySelector('.open-navigation-button').addEventListener('click', () => openNavigation())
document.querySelector('.close-navigation-button').addEventListener('click', () => closeNavigation())

const mainContent = document.querySelector('main')
document.querySelector('.scroll-down-button').addEventListener('click', () => {
    mainContent.scrollIntoView({ behavior: 'smooth' })
})

document.querySelectorAll('.video-player').forEach(player => {
    player.querySelector('.play-control button').addEventListener('click', event => play(event))
    player.querySelector('video').addEventListener('click', event => pause(event))
})
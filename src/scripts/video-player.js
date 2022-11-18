export function play(event) {
    const videoPlayer = event.currentTarget.parentElement.parentElement
    const video = videoPlayer.querySelector('video')
    video.removeAttribute('paused')
    video.play()

    videoPlayer.querySelector('.play-control').hidden = true
}

export function pause(event) {
    const video = event.currentTarget;
    if(!video.hasAttribute('paused')) {
        video.setAttribute('paused', '')
        video.pause()

        video.parentElement.querySelector('.play-control').hidden = false
    }
}
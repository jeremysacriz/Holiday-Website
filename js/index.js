// Helper functions
let elem = elem => document.querySelector(elem)
let elemAll = all => document.querySelector(all)
let id = id => document.getElementById(id)

const video = elem('.index-video')
const videoOverlay = elem('.home-overlay')
const layers = elem('.layers')
const layersClear = elem('.layers-clear')
const audio = elem('.audio')
const mute = elem('.mute')

layers.addEventListener('click', () => {
    videoOverlay.classList.toggle('active')
    layers.classList.add('active')
    layersClear.classList.add('active')

    video.play()

    video.muted = false
    if (video.muted === false) {
        audio.classList.add('active')
        mute.classList.add('active')
    }
})

layersClear.addEventListener('click', () => {
    layersClear.classList.remove('active')
    layers.classList.remove('active')
    videoOverlay.classList.remove('active')
})

audio.addEventListener('click', () => {
    video.muted = true
    if (video.muted === true) {
        audio.classList.remove('active')
        mute.classList.remove('active')
    }
})

mute.addEventListener('click', () => {
    video.muted = false
    if (video.muted === false) {
        audio.classList.add('active')
        mute.classList.add('active')
    }
})

const observerOptions = {
    root: null,
    rootMargin: '50% 0px 0px 0px',
    threshold: 1.0
}

const observer = new IntersectionObserver
(function(
    entries,
    observer
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                videoOverlay.classList.remove('active')
                layersClear.classList.remove('active')
                layers.classList.remove('active')
                
                video.pause()
            } else {
                video.play()
            }
        })
    },
observerOptions)

observer.observe(video)
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

    audio.classList.add('active')
    mute.classList.add('active')
    video.play()
})

layersClear.addEventListener('click', () => {
    layersClear.classList.remove('active')
    layers.classList.remove('active')
    videoOverlay.classList.remove('active')
})
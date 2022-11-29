const elem = elem => document.querySelector(elem)
const id = id => document.getElementById(id)
const elemAll = elemAll => document.querySelectorAll(elemAll)

const carousel = elem('.carousel')
if (document.body.contains(carousel)) {
    $(document).ready(function() {
        $('.carousel').carousel({
            indicators: true,
        })
    })
}

const italyGalleryItem = elemAll('.carousel .carousel-item')

italyGalleryItem.forEach(item => {
    item.addEventListener('click', () => {
        let newIndex = [...italyGalleryItem].indexOf(item)
        let parentLoader = item.querySelector('.img-container')
        let loaderImg = parentLoader.querySelector('img').src

        localStorage.setItem('activeIndex', newIndex)
        localStorage.setItem('loaderSrc', loaderImg)
    })
})

const homeGalleryItem = elemAll('.gallery .gallery-item')

homeGalleryItem.forEach(item => {
    item.addEventListener('click', () => {
        let newIndex = [...homeGalleryItem].indexOf(item)
        let loaderImg = item.querySelector('img').src

        localStorage.setItem('activeIndex', newIndex)
        localStorage.setItem('loaderSrc', loaderImg)
    })
})

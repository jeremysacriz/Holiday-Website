const elem = elem => document.querySelector(elem)
const id = id => document.getElementById(id)
const elemAll = elemAll => document.querySelectorAll(elemAll)

const btns = elemAll('.galleria-buttons button')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let parentBtn = elem('.galleria-buttons')
        let previousActiveBtn = parentBtn.querySelector('[data-active]')
        delete previousActiveBtn.dataset.active

        btn.dataset.active = "true"

        let previousIndex = [...parentBtn.children].indexOf(previousActiveBtn);
        let newIndex = [...parentBtn.children].indexOf(btn);
        let parentGallery = elem('.galleria-container')

        delete parentGallery.children[previousIndex].dataset.active
        parentGallery.children[newIndex].dataset.active = "true"

        let parentCarousel = elem('.carousel-img-container')

        delete parentCarousel.children[previousIndex].dataset.active
        parentCarousel.children[newIndex].dataset.active = "true"
    })
})

const galleria = elemAll('.galleria')
const galleryItem = elemAll('.galleria .gallery-item')  

const carousel = elem('.galleria-carousel')
const carouselPosition = elem('.carousel-position')
const carouselLength = elem('.carousel-length')
const leftBtn = elem('.left')
const rightBtn = elem('.right')

const activeCarousel = elemAll('.carousel')
const carouselImg = elemAll('.carousel .carousel-item')

galleria.forEach(gallery => {
    if (gallery.hasAttribute('data-active')) {
        galleryItem.forEach(item => {
            item.addEventListener('click', () => {
                carousel.classList.add('active')
                let currentIndex = [...galleryItem].indexOf(item)
                console.log(currentIndex)
                
                carouselPosition.innerHTML = currentIndex + 1
                activeCarousel.forEach(carousel => {
                    if (carousel.hasAttribute('data-active'))  {
                        carouselLength.innerHTML = carousel.children.length
                    }
                })
                carouselImg[currentIndex].dataset.active = "true"
            })
        })
    }
})

let buttons = elemAll('[data-carousel-btn')
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.carouselBtn === "next" ? 1 : -1
        let parentCarousel = elem('.rome-carousel')
        let activeImg = parentCarousel.querySelector('[data-active]')
    
        let newIndex = [...carouselImg].indexOf(activeImg) + offset
        if (newIndex < 0) newIndex = carouselImg.length - 1
        if (newIndex >= carouselImg.length) newIndex = 0

        carouselPosition.innerHTML = newIndex + 1

        carouselImg[newIndex].dataset.active = "true"
        delete activeImg.dataset.active
    })
})

let close = elem('.close')
close.addEventListener('click', () => {
    carousel.classList.remove('active')
    carouselImg.forEach(img => {
        delete img.dataset.active
    })
})
// const elem = elem => document.querySelector(elem)
// const id = id => document.getElementById(id)
// const elemAll = elemAll => document.querySelectorAll(elemAll)

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

const activeCarousel = elemAll('.carousel')
const carouselImg = elemAll('.carousel .carousel-item')

const key = (e) => {
    if (e.code === 'ArrowLeft') {
        activeCarousel.forEach(carousel => {
            if (carousel.hasAttribute('data-active')) {
                let activeImg = carousel.querySelector('[data-active]')
                let carouselImg = carousel.querySelectorAll('.carousel-item')

                let newIndex =[...carouselImg].indexOf(activeImg) - 1
                if (newIndex < 0) newIndex = carouselImg.length - 1
                if (newIndex >= carouselImg.length) newIndex = 0

                carouselPosition.innerHTML = newIndex + 1

                carouselImg[newIndex].dataset.active = "true"
                delete activeImg.dataset.active
            }
        })

    } else if (e.code === 'ArrowRight') {
        activeCarousel.forEach(carousel => {
            if (carousel.hasAttribute('data-active')) {
                let activeImg = carousel.querySelector('[data-active]')
                let carouselImg = carousel.querySelectorAll('.carousel-item')

                let newIndex =[...carouselImg].indexOf(activeImg) + 1
                if (newIndex < 0) newIndex = carouselImg.length - 1
                if (newIndex >= carouselImg.length) newIndex = 0

                carouselPosition.innerHTML = newIndex + 1

                carouselImg[newIndex].dataset.active = "true"
                delete activeImg.dataset.active
            }
        })

    } else {
        return null
    }
}

galleria.forEach(gallery => {
    if (gallery.hasAttribute('data-active')) {
        galleryItem.forEach(item => {
            item.addEventListener('click', () => {
                carousel.classList.add('active')
                let currentIndex = [...galleryItem].indexOf(item)
                
                carouselImg[currentIndex].dataset.active = "true"

                if (carousel.classList.contains('active')) {
                    document.addEventListener('keydown', key)

                    activeCarousel.forEach(carousel => {
                        if (carousel.hasAttribute('data-active'))  {
                            let carouselImg = carousel.querySelectorAll('.carousel-item')

                            carouselImg.forEach(img => {
                                if (img.hasAttribute('data-active')) {
                                    let currentIndex = [...carouselImg].indexOf(img)
                                    console.log(currentIndex)
                                    carouselPosition.innerHTML = currentIndex + 1
                                }
                            })

                            carouselLength.innerHTML = carouselImg.length
                        }
                    })
                }
            })
        })
    }
})

let buttons = elemAll('[data-carousel-btn')
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.carouselBtn === "next" ? 1 : -1

        activeCarousel.forEach(carousel => {
            if (carousel.hasAttribute('data-active')) {
                let activeImg = carousel.querySelector('[data-active]')
                let carouselImg = carousel.querySelectorAll('.carousel-item')

                let newIndex = [...carouselImg].indexOf(activeImg) + offset
                if (newIndex < 0) newIndex = carouselImg.length - 1
                if (newIndex >= carouselImg.length) newIndex = 0
        
                carouselPosition.innerHTML = newIndex + 1
        
                carouselImg[newIndex].dataset.active = "true"
                delete activeImg.dataset.active
            }
        })
    })
})

let close = elem('.close')
close.addEventListener('click', () => {
    carousel.classList.remove('active')
    carouselImg.forEach(img => {
        delete img.dataset.active
    })
    document.removeEventListener('keydown', key)
})
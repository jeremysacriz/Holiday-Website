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
    })
})

// const carousel = elem('.galleria-carousel')
// const carouselPosition = elem('.carousel-position')
// const carouselLength = elem('.carousel-length')
// const galleria = elemAll('.galleria')
// const carouselImg = elem('.carousel-img-container img')
// const leftBtn = elem('.left')
// const rightBtn = elem('.right')
// const galleryImg = elemAll('.gallery-item img')

// galleria.forEach(gallery => {
//     let image = gallery.querySelectorAll('.gallery-item img')
//     carouselLength.innerHTML = image.length
    
//     image.forEach(img => {
//         img.addEventListener('click', () => {
//             let activeSlide = gallery
//             let currentIndex = [...image].indexOf(img)
//             carouselPosition.innerHTML = currentIndex + 1
//             console.log(img)
            
//             image[currentIndex].dataset.active = "true"
//             carousel.classList.add('active')
//             carouselImg.src = image[currentIndex].src
//         })
//     })
// })

// let close = elem('.close')

// close.addEventListener('click', () => {
//     carousel.classList.remove('active')
//     for (let i = 0; i < galleryImg.length; i++) {
//         if (galleryImg[i].hasAttribute('data-active')) {
//             delete galleryImg[i].dataset.active
//         }
//     }
// })
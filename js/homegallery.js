const elem = elem => document.querySelector(elem)
const id = id => document.getElementById(id)
const elemAll = elemAll => document.querySelectorAll(elemAll)

const homeGalleryItem = elemAll('.gallery .gallery-item')

homeGalleryItem.forEach(item => {
    item.addEventListener('click', () => {
        let newIndex = [...homeGalleryItem].indexOf(item)
        localStorage.setItem('activeIndex', newIndex)
    })
})

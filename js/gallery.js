let elem = elem => document.querySelector(elem)
let id = id => document.getElementById(id)
let elemAll = elemAll => document.querySelectorAll(elemAll)

let btns = elemAll('.galleria-buttons button')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let parentBtn = elem('.galleria-buttons')
        let previousActiveBtn = parentBtn.querySelector('[data-active]')
        delete previousActiveBtn.dataset.active

        btn.dataset.active = "true"
        let newActiveBtn = parentBtn.querySelector('[data-active]')
        let newBtnIndex = [...parentBtn.children].indexOf(newActiveBtn)

        let parentGallery = elem('.galleria-container')
        let previousActiveGallery = parentGallery.querySelector('[data-active]')
        delete previousActiveGallery.dataset.active

        parentGallery.children[newBtnIndex].dataset.active = "true"
    })
})
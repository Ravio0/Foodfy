const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalContent = document.querySelectorAll('.modalcontent')


for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')

    })

}

document.querySelector('.close-modal').addEventListener('click', function(){
        modalOverlay.classList.remove('active')
    })

modalOverlay.addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
    })
    const itemTitle = card.getAttribute('id')
}


document.querySelector('.close-modal').addEventListener('click', function(){
        modalOverlay.classList.remove('active')
    })

modalOverlay.addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

modalOverlay.querySelector("modalcontent")
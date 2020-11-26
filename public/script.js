const modalOverlay = document.querySelector('.modaloverlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const recipeid = card.getAttribute('id')
        window.location.href = '/data?id=${recipeid}'
    })
}
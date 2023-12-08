let shuffle = document.querySelector('input');

shuffle.addEventListener('click', shuffle)
shuffle.addEventListener('animationend', shuffle)

function shuffle() {
    shuffle.classList.toggle('shuffle');
}
let shuffle = document.querySelector('element');

shuffle.addEventListener('click', shuffle)
shuffle.addEventListener('animationend', shuffle)

function shuffle() {
    shuffle.classList.toggle('shuffle');
}
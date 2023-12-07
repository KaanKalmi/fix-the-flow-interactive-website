let shuffle = document.querySelector('button');

shuffle.addEventListener('click', shuffle)
shuffle.addEventListener('animationend', shuffle)

function shuffle() {
    shuffle.classList.toggle('shuffle');
}
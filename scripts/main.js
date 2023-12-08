let interaction = document.querySelector('input')

interaction.addEventListener('click', shuffle)
interaction.addEventListener('animationend', shuffle)

function shuffle() {
   interaction.classList.toggle('shuffle')
}
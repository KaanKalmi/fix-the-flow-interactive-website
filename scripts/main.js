
let interaction = document.querySelector('radio')

let card1 = document.querySelector('#card1')
let radioCard1 = document.getElementsByName('1')
let cards = document.querySelectorAll('.card')

console.log(card1);
console.log(radioCard1);
console.log(cards);

radioCard1.forEach(radioElement => {
   radioElement.addEventListener('click', function() {
      console.log('clicked card');   
      card1.classList.toggle('shuffle')
   })
});

// card1.addEventListener('click', function() {
//    console.log('clicked card');
// })

// radioCard1.addEventListener('onchange', shuffle()) 

// interaction.addEventListener('click', shuffle())
// interaction.addEventListener('animationend', shuffle)

function shuffle() {
   console.log('clicked card');
   card1.classList.toggle('shuffle')
}
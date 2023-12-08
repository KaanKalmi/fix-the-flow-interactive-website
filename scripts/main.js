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
      card1.addEventListener('animationend', function() {
         card1.classList.toggle('hide')
      })
   })
});

function shuffle() {
   console.log('clicked card');
   card1.classList.toggle('shuffle')
}

let card2 = document.querySelector('#card2')
let radioCard2 = document.getElementsByName('2')

console.log(card2);
console.log(radioCard2);

radioCard2.forEach(radioElement => {
   radioElement.addEventListener('click', function() {
      console.log('clicked card');   
      card2.classList.toggle('shuffle')
      card2.addEventListener('animationend', function() {
         card2.classList.toggle('hide')
      })
   })
}
);

let card3 = document.querySelector('#card3')
let radioCard3 = document.getElementsByName('3')

console.log(card3);
console.log(radioCard3);

radioCard3.forEach(radioElement => {
   radioElement.addEventListener('click', function() {
      console.log('clicked card');   
      card3.classList.toggle('shuffle')
      card3.addEventListener('animationend', function() {
         card3.classList.toggle('hide')
      })
   })
}
);
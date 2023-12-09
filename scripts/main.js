let card1 = document.querySelector('#card1') // select the first card
let radioCard1 = document.getElementsByName('1') // select the radio buttons for the first card
let cards = document.querySelectorAll('.card') // select all cards

console.log(card1); // shows card1 in console (inspect element)
console.log(radioCard1); // shows racioCard1 in console (inspect element)
console.log(cards); // shows cards in console (inspect element)

radioCard1.forEach(radioElement => { // for each radio button
   radioElement.addEventListener('click', function () { // add event listener
      console.log('clicked card'); // shows clicked card in console (inspect element)
      card1.classList.toggle('shuffle') // toggle shuffle class
      card1.addEventListener('animationend', function () { // add event listener
         card1.classList.toggle('hide') // toggle hide class
      })
   })
});

function shuffle() { // shuffle function
   console.log('clicked card'); // shows clicked card in console (inspect element)
   card1.classList.toggle('shuffle') // toggle shuffle class
}

let card2 = document.querySelector('#card2') // select the second card
let radioCard2 = document.getElementsByName('2') // select the radio buttons for the second card

console.log(card2); // shows card2 in console (inspect element)
console.log(radioCard2); // shows racioCard2 in console (inspect element)

radioCard2.forEach(radioElement => { // for each radio button
   radioElement.addEventListener('click', function () { // add event listener
      console.log('clicked card'); // shows clicked card in console (inspect element)
      card2.classList.toggle('shuffle') // toggle shuffle class
      card2.addEventListener('animationend', function () { // add event listener
         card2.classList.toggle('hide') // toggle hide class
      })
   })
}
);
 
let card3 = document.querySelector('#card3') // select the third card
let radioCard3 = document.getElementsByName('3') // select the radio buttons for the third card

console.log(card3); // shows card3 in console (inspect element)
console.log(radioCard3); // shows racioCard3 in console (inspect element)

radioCard3.forEach(radioElement => { // for each radio button
   radioElement.addEventListener('click', function () { // add event listener
      console.log('clicked card'); // shows clicked card in console (inspect element)
      card3.classList.toggle('shuffle') // toggle shuffle class
      card3.addEventListener('animationend', function () { // add event listener
         card3.classList.toggle('hide')  // toggle hide class
      })
   })
}
);

let card4 = document.querySelector('#card4') // select the fourth card
let radioCard4 = document.getElementsByName('4') // select the radio buttons for the fourth card

console.log(card4); // shows card4 in console (inspect element)
console.log(radioCard4); // shows racioCard4 in console (inspect element)

radioCard4.forEach(radioElement => { // for each radio button
   radioElement.addEventListener('click', function () { // add event listener
      console.log('clicked card'); // shows clicked card in console (inspect element)
      card4.classList.toggle('shuffle') // toggle shuffle class
      card4.addEventListener('animationend', function () { // add event listener
         card4.classList.toggle('hide') // toggle hide class
      })
   })
}
);

let card5 = document.querySelector('#card5') // select the fifth card
let radioCard5 = document.getElementsByName('5') // select the radio buttons for the fifth card

console.log(card5); // shows card5 in console (inspect element)
console.log(radioCard5); // shows racioCard5 in console (inspect element)

radioCard5.forEach(radioElement => { // for each radio button
   radioElement.addEventListener('click', function () { // add event listener
      console.log('clicked card'); // shows clicked card in console (inspect element)
      card5.classList.toggle('shuffle') // toggle shuffle class
      card5.addEventListener('animationend', function () { // add event listener
         card5.classList.toggle('hide') // toggle hide class
      })
   })
}
);

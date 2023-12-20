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

let inputs = document.getElementsByTagName('input');
for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function() {
   let input1 = document.getElementById('answer1-1').value;
   let input2 = document.getElementById('answer1-2').value;
   let input3 = document.getElementById('answer1-3').value;
   let input4 = document.getElementById('answer1-4').value;
   let input5 = document.getElementById('answer1-5').value;
   let input6 = document.getElementById('answer2-1').value;
   let input7 = document.getElementById('answer2-2').value;
   let input8 = document.getElementById('answer2-3').value;
   let input9 = document.getElementById('answer2-4').value;
   let input10 = document.getElementById('answer2-5').value;
   let input11 = document.getElementById('answer3-1').value;
   let input12 = document.getElementById('answer3-2').value;
   let input13 = document.getElementById('answer3-3').value;
   let input14 = document.getElementById('answer3-4').value;
   let input15 = document.getElementById('answer3-5').value;
   let input16 = document.getElementById('answer4-1').value;
   let input17 = document.getElementById('answer4-2').value;
   let input18 = document.getElementById('answer4-3').value;
   let input19 = document.getElementById('answer4-4').value;
   let input20 = document.getElementById('answer4-5').value;
   let input21 = document.getElementById('answer5-1').value;
   let input22 = document.getElementById('answer5-2').value;
   let input23 = document.getElementById('answer5-3').value;
   let input24 = document.getElementById('answer5-4').value;
   let input25 = document.getElementById('answer5-5').value;

   let result = 
  (Number(input1) + Number(input2) + Number(input3) + Number(input4) + Number(input5)
   + Number(input6) + Number(input7) + Number(input8) + Number(input9) + Number(input10) 
   + Number(input11) + Number(input12) + Number(input13) + Number(input14) + Number(input15)
   + Number(input16) + Number(input17) + Number(input18) + Number(input19) + Number(input20)
   + Number(input21) + Number(input22) + Number(input23) + Number(input24) + Number(input25))
   / 5;

   // Update the score element
   document.getElementById('score').innerText = 'The score is: ' + result;
});
}
// Add an event listener to the button with the ID "btn-alert"


document.getElementById('btn-alert').addEventListener('click', function() {
    // Display an alert when the button is clicked
    alert('(=˃ᆺ˂=) Meow');
});

// Eventlister makes things do thing when button is clicked
// Get the button element by ID
const button = document.getElementById('btn-alert');


button.addEventListener('mouseover', function() {
    // Change the button label on mouseover
    button.innerText = 'Meow Meow! ᨐฅ';
});


button.addEventListener('mouseleave', function() {
    // Revert the button label when not hover 
    button.innerText = 'Meow?';
});
//new variable that will find the year 
const currentyear = new Date().getFullYear(); 
document.getElementById('footer').innerText = `© ${currentyear} Anna Liu`;


let count = 1;

// button and paragraph elements varibles by ID 
const buttonfeed = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');
const numbersList = document.getElementById('numbers');
const counterButton = document.getElementById('btn-counter');
const numbersButton = document.getElementById('btn-counter');



// Add event listener for new button 
buttonfeed.addEventListener('click', function() {
    
count = count + 1;// makes it count up by 1

    // Update the text of for <p> 
    counterText.innerHTML = 'You have fed him: ' + count + ' times! (=ↀωↀ=)';

    /// changes color is it's odd or even. % mean remainder
    if (count % 2 === 0) {
        console.log('Even')
         counterText.classList.remove('odd');
         counterText.classList.add('even');
     } else {
         console.log('Odd')
         counterText.classList.remove('even');
         counterText.classList.add('odd');
     };

     /// He's getting fat lol 
     if (count > 20){
        counterText.innerHTML =  'I think he is gaining weight... '+ count + ' (=ಠᆽಠ=)';
     }
     else {

     }
     if (count > 50){
        counterText.innerHTML =  'Pls stop...'+ count + ' [^._.^]ﾉ';
     }
     else {

     }
     if (count > 80){
        counterText.innerHTML =  'Knock knock, your therapist is at your door ^._.^ฅ '+ count;
     }
     else {

     }

     if (count > 100){
        counterText.innerHTML =  'You are banned from feeding the cat  -ꞈ- ';
     }
     else {

     }

    //hide the ordered list
    numbersList.style.display = 'none';

});

// when the button is click... it will...
numbersButton.addEventListener('click', function () {
   
    for (let i = 1; i <= 100; i++) { ///This will display the number and if it is even or odd into console
        console.log(`Item ${i}: Number ${count}, ${i % 2 === 0 ? 'Even' : 'Odd'}`);
    }
});




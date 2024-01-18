//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"The best ist the naaaaaa"',
    person: ' aristole'
}, {
    quote: '"The best ist the naaaaaa"',
    person: ' yemi'
}, {
    quote: '"The best ist the naaaaaa"',
    person: ' bose'
}, {
    quote: '"You background shouldnt put your back on the ground"',
    person: 'seyi'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
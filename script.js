const quotes = [
    {
      name: 'Albert Einstein.',
      quote: 'I have no special talent. I am only passionately curious.'
    },
    {
        name: 'Buddha.',
        quote: 'All that we are is the result of what we have thought.'
    },
    {
        name: 'Stanford Green.',
        quote: 'Stay hungry, believe in yourself.'
    },
    {
        name: 'Malcolm X.',
        quote: 'The future belongs to those who prepare for it today.'
    },
    {
        name: 'Bruce Lee.',
        quote: 'The successful warrior is the average man, with laser-like focus.'
    },
    {
        name: 'Ralph Waldo Emerson.',
        quote: 'A great man is always willing to be little.'
    },
    {
        name: 'Nelson Mandela.',
        quote: 'It always seems impossible until it’s done.'
    },
    {
        name: 'Abraham Lincoln.',
        quote: 'Whatever you are, be a good one.'
    },
    {
        name: 'William Shakespeare.',
        quote: 'Love all, trust a few, do wrong to none.'
    },
    {
        name: 'Dalai Lama.',
        quote: 'Be kind whenever possible. It is always possible.'
    },
    {
        name: 'Bob Marley.',
        quote: 'Love the life you live. Live the life you love.'
    },
    {
        name: 'Confucius.',
        quote: 'It does not matter how slowly you go so long as you do not stop.'
    },
    {
        name: 'Nelson Mandela.',
        quote: 'Education is the most powerful weapon which you can use to change the world.'
    },
    {
        name: 'Pablo Picasso.',
        quote: 'Good artists copy, great artists steal.'
    },
    {
        name: 'Stanford Green.',
        quote: 'Dream, Dream, never stop dreaming.'
    },
    {
        name: 'Paulo Coelho.',
        quote: 'You are what you believe yourself to be.'
    },
    {
        name: 'Kobe Bryant.',
        quote: 'Everything negative – pressure, challenges – is all an opportunity for me to rise.'
    },
    {
        name: 'LeBron James.',
        quote: 'I like criticism. It makes you strong.'
    },
    {
        name:'James Baldwin.',
        quote:'Those who say it can’t be done are usually interrupted by others doing it.'
    },
    {
       name:'Denzel Washington.',
       quote:'Do what you have to do, to do what you want to do.'
    },
    {
        name:'Muhammad Ali.',
        quote:'Often it isn’t the mountains ahead that wear you out, it’s the little pebble in your shoe.'
    },
    {
        name:'Albert Einstein.',
        quote:'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },
    {
        name:'Jay-Z.',
        quote:'You learn more in failure than you ever do in success.'
    },
    {
       name:'Frederick Douglass.',
       quote:'If there is no struggle, there is no progress.'
    }

];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
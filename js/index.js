var listOfQuotes = [
    {

        'quote': "“Be yourself; everyone else is already taken.”",
        'author': "― Oscar Wilde"
    },
    {
        'quote': "“It is better to be hated for what you are than to be loved for what you are not.”",
        'author': "― Andre Gide"

    },
    {
        'quote': "“So many books, so little time.”",
        'author': "― Frank Zappa"

    },
    {
        'quote': "“A room without books is like a body without a soul.”",
        'author': "― Marcus Tullius"


    },
    {
        'quote': "“You only live once, but if you do it right, once is enough.”",
        'author': "― Mae West"

    },
    {
        'quote': "“If you tell the truth, you don't have to remember anything.”",
        'author': "― Mark Twain"

    },
    {
        'quote': "“A friend is someone who knows all about you and still loves you.”",
        'author': "― Elbert Hubbard"

    },
    {
        'quote': "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        'author': "― Mahatma Gandhi"

    },
    {
        'quote': "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        'author': "― Ralph Waldo "

    },
    {
        'quote': "“Insanity is doing the same thing, over and over again, but expecting different results.”",
        'author': "― Narcotics Anonymous"

    },
];

var previosRandomIndex;
function displayQuote() {

    var random = Math.floor(Math.random() * listOfQuotes.length);
    if (random == previosRandomIndex) {
        displayQuote()
    }
    else {
        previosRandomIndex = random
        document.getElementById('quoteElement').textContent = `${listOfQuotes[random].quote} `;
        document.getElementById('authorElement').textContent = `${listOfQuotes[random].author}`;
    }
}

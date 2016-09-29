(function() {
    'use strict';
    var quoutes = [
        {
            author: 'Winston Churchill',
            quote: 'Criticism may not be agreeable, but it is necessary. It fulfills the same function as pain in the human body. It calls attention to an unhealthy state of things.'
        },
        {
            author: 'Ayn Rand',
            quote: 'Ideas can not be fought except by means of better ideas. The battle consists not of opposing, but of exposing; not of denouncing, but of disproving; not of evading, but of boldly proclaiming a full, consistent and radical alternative.'
        },
        {
            author: 'Thomas Edison',
            quote: 'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.'
        },
        {
            author: 'Elbert Hubbard',
            quote: 'One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.'
        },
        {
            author: 'Wayne Gretzky',
            quote: 'You miss 100 percent of the shots you never take.'
        }
    ];

    var random = Math.floor((Math.random() * quoutes.length)),
        quote = quoutes[random],
        template = '<blockquote>{quote}<span class="author">{author}</span></blockquote>';
    document.getElementsByTagName('footer')[0].innerHTML = template.replace('{quote}', quote.quote).replace('{author}', quote.author);

})();

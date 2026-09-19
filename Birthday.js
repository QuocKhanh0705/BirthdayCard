(function() {
    function $(id) {
        return document.getElementById(id);
    }

    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        audio = $('bg-music'),
        timer = null;

    if (audio) {
        audio.volume = 0.35;
        audio.play().catch(function() {});
    }

    openB.addEventListener('click', function() {
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            card.setAttribute('class', 'open-fully');
            timer = null;
        }, 1000);
    });

    closeB.addEventListener('click', function() {
        card.setAttribute('class', 'close-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            card.setAttribute('class', '');
            timer = null;
        }, 1000);
    });

}());
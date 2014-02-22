'use strict';

$('.js-email').click(function() {
    var arr = ['info', '@', 'joakimwanggren.se'];
    return 'mailto:' + arr.join();
});

$('.js-call').click(function() {
    var arr = ['+46', '736', '168911'];
    return 'tel:' + arr.join();
});
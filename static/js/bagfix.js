$(document).ready(function() {
    const lockPaddingValue = window.outerHeight + 'px';
    const lockPaddingStat = $(".parallax").css("background-size");
    $(".parallax").css("min-height", lockPaddingValue);
    $(".parallax").css("height", lockPaddingValue);
    $(".parallax").css("background-size", lockPaddingStat)
});

// $(window).resize(function() {
//     let lockPaddingValue = window.outerHeight + 'px';
//     let para = $('.parallax').css('height');
//     let del = $('.parallax').css('background-size')
//         // $(".parallax").css("min-height", lockPaddingValue);
//         // $(".parallax").css("height", lockPaddingValue);
//     $('#startInfo').text(lockPaddingValue + para + del);
// });
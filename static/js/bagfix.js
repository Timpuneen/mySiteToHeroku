$(document).ready(function() {
    const lockPaddingValue = window.outerHeight;
    const hResult = String(lockPaddingValue + 60) + 'px';
    const result = String(lockPaddingValue * 1.5 + 120) + 'px';
    $(".parallax").css("min-height", hResult);
    $(".parallax").css("height", hResult);
    $(".parallax").css("background-size", result + "," + hResult)
});

// $(window).resize(function() {
//     let lockPaddingValue = window.outerHeight + 'px';
//     let para = $('.parallax').css('height');
//     let del = $('.parallax').css('background-size')
//         // $(".parallax").css("min-height", lockPaddingValue);
//         // $(".parallax").css("height", lockPaddingValue);
//     $('#startInfo').text(lockPaddingValue + para + del);
// });
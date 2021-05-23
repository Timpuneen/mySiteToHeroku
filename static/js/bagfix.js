$(document).ready(function() {
    const lockPaddingValue = window.outerHeight + 'px';
    $(".parallax").css("min-height", lockPaddingValue);
    $(".parallax").css("height", lockPaddingValue);
    let res = lockPaddingValue.substring(0, lockPaddingValue.length - 2);
    let result = String(res * 1.5) + 'px';
    $(".parallax").css("background-size", result + "," + lockPaddingValue)
});

// $(window).resize(function() {
//     let lockPaddingValue = window.outerHeight + 'px';
//     let para = $('.parallax').css('height');
//     let del = $('.parallax').css('background-size')
//         // $(".parallax").css("min-height", lockPaddingValue);
//         // $(".parallax").css("height", lockPaddingValue);
//     $('#startInfo').text(lockPaddingValue + para + del);
// });
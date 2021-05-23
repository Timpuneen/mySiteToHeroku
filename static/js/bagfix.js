$(document).ready(function() {
    const lockPaddingValue = window.outerHeight + 'px';
    const lockPaddingValueW = $(".parallax").css("height");
    $(".parallax").css("min-height", lockPaddingValue);
    $(".parallax").css("height", lockPaddingValue);
    let el = $(".parallax").css('width');
    let res = el.substring(0, el.length - 2);
    let result = String(res * 2) + 'px';
    $(".parallax").css("background-size", result + "," + lockPaddingValue)
    alert($(".parallax").css("background-size"));
});

// $(window).resize(function() {
//     let lockPaddingValue = window.outerHeight + 'px';
//     let para = $('.parallax').css('height');
//     let del = $('.parallax').css('background-size')
//         // $(".parallax").css("min-height", lockPaddingValue);
//         // $(".parallax").css("height", lockPaddingValue);
//     $('#startInfo').text(lockPaddingValue + para + del);
// });
$(document).ready(function() {
    // const lockPaddingValue = window.outerHeight + 'px';
    // // const lockPaddingStat = $(".parallax").css("background-size");
    // // const res = lockPaddingStat...
    // $(".parallax").css("min-height", lockPaddingValue);
    // $(".parallax").css("height", lockPaddingValue);
    // $(".parallax").css("background-size", "20000px" + "," + lockPaddingValue)
    // alert($(".parallax").css("background-size"))
    // const lockPaddingValue = window.outerHeight - window.innerHeight;
    // const lockPaddingStat = $(".parallax").css("background-size");
    // alert(lockPaddingStat + lockPaddingValue)
    const lockPaddingValue = window.outerHeight + 'px';
    const lockPaddingValueW = $(".parallax").css("height");
    $(".parallax").css("min-height", lockPaddingValue);
    $(".parallax").css("height", lockPaddingValue);
    $(".parallax").css("background-size", $(".parallax").css("width") / 2 + ',' + lockPaddingValue)
});

// $(window).resize(function() {
//     let lockPaddingValue = window.outerHeight + 'px';
//     let para = $('.parallax').css('height');
//     let del = $('.parallax').css('background-size')
//         // $(".parallax").css("min-height", lockPaddingValue);
//         // $(".parallax").css("height", lockPaddingValue);
//     $('#startInfo').text(lockPaddingValue + para + del);
// });
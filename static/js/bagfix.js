// $(document).ready(function() {
//     const lockPaddingValue = window.innerHeight + 'px';
//     $(".parallax").css("min-height", lockPaddingValue);
//     $(".parallax").css("height", lockPaddingValue);
// });

$(window).resize(function() {
    let lockPaddingValue = window.innerHeight + 'px';
    let para = $('.parallax').css('height');
    let del = $('.parallax').css('background-size')
        // $(".parallax").css("min-height", lockPaddingValue);
        // $(".parallax").css("height", lockPaddingValue);
    $('#startInfo').text(lockPaddingValue + para + del);
});
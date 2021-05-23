$(document).ready(function() {
    const lockPaddingValue = window.outerHeight;
    const hResult = String(lockPaddingValue * 1.2) + 'px';
    const result = String(lockPaddingValue * 1.85) + 'px';
    $(".parallax").css("min-height", hResult);
    $(".parallax").css("height", hResult);
    $(".parallax").css("background-size", result + "," + hResult)
});

$(window).resize(function() {
    const lockPaddingValue = window.outerHeight;
    const hResult = String(lockPaddingValue * 1.2) + 'px';
    const result = String(lockPaddingValue * 1.85) + 'px';
    $(".parallax").css("min-height", hResult);
    $(".parallax").css("height", hResult);
    $(".parallax").css("background-size", result + "," + hResult);
});
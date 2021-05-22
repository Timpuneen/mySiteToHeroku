// $(document).ready(function() {
//     const lockPaddingValue = window.innerHeight + 'px';
//     $(".parallax").css("min-height", lockPaddingValue);
//     $(".parallax").css("height", lockPaddingValue);
// });

// $(window).resize(function() {
//     const lockPaddingValue = window.innerHeight + 'px';
//     $(".parallax").css("min-height", lockPaddingValue);
//     $(".parallax").css("height", lockPaddingValue);
// });

$modal.on('show', () => $scrollBox.css({ 'pointer-events': 'none' }));
$modal.on('hide', () => $scrollBox.css({ 'pointer-events': 'auto' }));
/* Note 'box-text' is class here
here used 769px for min width media query */


document.addEventListener("DOMContentLoaded", function() {
// Check if the screen width is at least 769 pixels
if (window.matchMedia("(min-width: 769px)").matches) {
var sameHeightDivs = document.querySelectorAll('.box-text');
var maxHeight = 0;

sameHeightDivs.forEach(function(div) {
maxHeight = Math.max(maxHeight, div.offsetHeight);
});

sameHeightDivs.forEach(function(div) {
div.style.height = maxHeight + 'px';
});
}
});

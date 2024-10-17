/* Note: bt_bb_price_list and bt_bb_price_list these are selector class for multiple selector use case */

document.addEventListener("DOMContentLoaded", function() {
function setEqualHeight(selector) {
var sameHeightDivs = document.querySelectorAll(selector);
var maxHeight = 0;

sameHeightDivs.forEach(function(div) {
maxHeight = Math.max(maxHeight, div.offsetHeight);
});

sameHeightDivs.forEach(function(div) {
div.style.height = maxHeight + 'px';
});
}

// Initial calls to setEqualHeight for each selector
setEqualHeight('.bt_bb_price_list');
setEqualHeight('.bt_bb_price_list');

// Add event listener for window resize
window.addEventListener('resize', function() {
var windowWidth = window.innerWidth;

if (windowWidth >= 769 && windowWidth <= 1399) {
// Resize for the first selector
setEqualHeight('.price-tables-first .bt_bb_column .bt_bb_price_list');

// Resize for the second selector
setEqualHeight('.price-tables .bt_bb_column .bt_bb_price_list');
} else {
// Reset the height if outside the specified width range
var allSelectors = ['.price-tables-first .bt_bb_column .bt_bb_price_list', '.price-tables .bt_bb_column .bt_bb_price_list'];

allSelectors.forEach(function(selector) {
var sameHeightDivs = document.querySelectorAll(selector);
sameHeightDivs.forEach(function(div) {
div.style.height = '';
});
});
}
});
});

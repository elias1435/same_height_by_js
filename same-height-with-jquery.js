/* Firstly, you are probably aware only one element should have any one id attribute.
So I have changed the selectors as if they were classes to classes below.
Even though you may not give a care about W3C standards, browsers or JavaScript API, etc
may rely on this behaviour and not work now or in the future. */
/* Note: if needed use the jquery library <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */

$(document).ready(function () {    
    $('.sameheight-section > div').each(function() {
    var $sameHeightChildren = $(this).find('.block-des');
    var maxHeight = 0;
    $sameHeightChildren.each(function() {
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    $sameHeightChildren.css({ height: maxHeight + 'px' });
});
});

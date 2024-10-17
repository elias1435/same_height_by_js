$(document).ready(function () {    
        var $sameHeightDivs = $('.sameHeight');
        var maxHeight = 0;
        $sameHeightDivs.each(function() {

            maxHeight = Math.max(maxHeight, $(this).outerHeight());

        });

        $sameHeightDivs.css({ height: maxHeight + 'px' });
});

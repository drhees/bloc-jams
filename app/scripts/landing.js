$(document).ready( function() {
    $('.hero-content p').click( function() {
        console.log("hello!");
        var subText = $(this).text();
        $(this).text( subText + '!');
    });
    

    var onHoverAction = function() {
        console.log('On hover action');
        $(this).animate({'margin-top': '10px'});
    }

    var offHoverAction = function() {
        console.log('Off hover action');
        $(this).animate({'margin-top': '0px'});
    }

    $('.selling-point').hover( onHoverAction, offHoverAction );
});
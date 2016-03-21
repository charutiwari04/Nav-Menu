/* 
 * Add Animation to turn the background color of active anchor to be white
 * and color of text to be black.
 */
$('.nav-list').prepend('<li id="white-box"><a href="#"></a></li>');
var newBox = $('#white-box a');
newBox.hide();
$("li a").click(function() {
	    newBox.show();
	    var $el = $(this);
        var leftPos = $el.position().left;
		var text_val = $el.text(); 
		newBox.text(text_val);
		newBox.css('color','black');
		newBox.stop().animate({
            left: leftPos
        },'fast')
});
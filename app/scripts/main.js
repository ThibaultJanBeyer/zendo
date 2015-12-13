/*-----------------------------------------------------------------

[Master Script]

Project:	zendo
Version:	0.0.5
Last change:	15/12/13 [inputs]

* Copyright (c) 2015, Thibault Jan Beyer
* Website: http://www.thibaultjanbeyer.com/

------------------------------------------------------------------

[Table of contents]

1. Toggle SVG Audio Class
2. Slide right side in & out
3. Input

------------------------------------------------------------------
	Small Plugins
------------------------------------------------------------------

------------------------------------------------------------------
					Startups
------------------------------------------------------------------
*/
(function($){
/*
------------------------------------------------------------------
					1. Toggle SVG Audio Class
------------------------------------------------------------------
*/

$('.music').click(function(){
    $('.music svg').toggleClasses(['muteClick', 'playClick', 'playLoudClick']);
});

/*
------------------------------------------------------------------
					2. Slide right side in & out
------------------------------------------------------------------
*/

$('#completed').click(function(){
	$('#everything').addClass('right');
});

$('#incompleted').click(function() {
	$('#everything').removeClass('right');
});

/*
------------------------------------------------------------------
					3. Input
------------------------------------------------------------------
*/

/* Focus */
$('input').on('focus', function(){ 
	$('.inputHolder').removeClass('focus');
	$(this).parent().addClass('focus');
});

$('input').on('focusout', function(){ 
	$('.inputHolder').removeClass('focus');
	$('.inputHolder.task').addClass('focus');
	$('input').each(function(){
		var $this = $(this);
		if ($this.val().length !== 0){
			$this.parent().addClass('complete');
		} else {
			$this.parent().removeClass('complete');
		}
	});
});

$('input').on('keypress', function(e){
	var $this = $(this);
	if( $this.attr('type') == "search" && e.keyCode !== 9 && e.keyCode !== 8 && e.keyCode !== 13 ){
		$('.iTask').addClass('hide');
	}
});

/*
------------------------------------------------------------------
					END
------------------------------------------------------------------
*/
})(jQuery);
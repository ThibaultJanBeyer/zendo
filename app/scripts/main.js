/*-----------------------------------------------------------------

[Master Script]

Project:	zendo
Version:	0.0.2
Last change:	15/12/04 [toggleclick]

* Copyright (c) 2015, Thibault Jan Beyer
* Website: http://www.thibaultjanbeyer.com/

------------------------------------------------------------------

[Table of contents]

1. Toggle SVG Audio Class


------------------------------------------------------------------
	Small Plugins
------------------------------------------------------------------

------------------------------------------------------------------
					Startups
------------------------------------------------------------------

------------------------------------------------------------------
					1. Toggle SVG Audio Class
------------------------------------------------------------------
*/

var classes = ['muteClick', 'playClick', 'playLoudClick'],
    currentClass = 0;

$('.music').click(function () {
    $('svg').attr("class", "");
    if (currentClass + 1 < classes.length){
        currentClass += 1;
    }else{
        currentClass = 0;
    }
    $('svg').attr("class", classes[currentClass]);
});

$('.music').keydown(function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        $('svg').attr("class", "");
        if (currentClass + 1 < classes.length){
            currentClass += 1;
        }else{
            currentClass = 0;
        }
        $('svg').attr("class", classes[currentClass]); 
    }
});
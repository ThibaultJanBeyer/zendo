(function($){
 	$.fn.extend({
 	    toggleClasses: function(classes, boolean){
 	      var 	conf = {
			   		//defaults
			   		toggleZero: boolean
		   		},
				currentClass = 0,
		  		elementClass = $(this).attr("class").split(" "),
				hasClass = [];
		  
		  //global function that removes all items in array that match the argument
		  Array.prototype.remove = function() {
			var what, a = arguments, L = a.length, ax;
			while (L && this.length) {
				what = a[--L];
				while ((ax = this.indexOf(what)) !== -1) {
					this.splice(ax, 1);
				}
			}
			return this;
			};
		  
		  //check if element has specific class
		  for(var i = 0; i < classes.length; i++){
			if ( elementClass.indexOf(classes[i]) != -1 ){
				hasClass[i] = 'true';
			}
		  }
		  for(var int = 0; int < classes.length; int++){
			if ( hasClass.indexOf('true') >= 0 ){
				if (hasClass[int] === 'true' && int < (classes.length - 1)) {
					elementClass.remove(classes[int]);
					currentClass = int + 1;
					elementClass.push(classes[currentClass]);
					break;
				} else if (hasClass[int] === 'true'){
					elementClass.remove(classes[int]);
					currentClass = 0;
					if (classes.length > 1 && conf.toggleZero !== true){
						elementClass.push(classes[currentClass]);
					}
					break;	
				}
			} else {
				// if there is no class then set to the class to start with the respective one
				currentClass = 0;
				elementClass.push(classes[currentClass]);
				break;
			}
		  }
		  
		  $.extend(conf, classes);
		  return $(this).each(function(){
				$(this).attr("class", elementClass.join(" "));
          });
	    }
	});
 })(jQuery);
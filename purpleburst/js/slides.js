// Porfolio Slides Programing

	/**************************
	JQUERY INITIALIZING
	**************************/

	$(document).ready(function() {
        
	/***********************
	Variable Definition
	***********************/

	var velo = 400;
	var timervelo = 7000;
	var slider = $("#slides ul"); //Obtain the overal width of the list area
	var slidewidth = $("#slides ul li").width(); //Obtain the width of EACH LI!
	var slideamount = $("#slides ul li").length; //Obtain the amount of Li's !
	slider.css("width",(slideamount * slidewidth) + "px");


	/**********************************
	We proceed to put the first picture
	before the last one
	**********************************/


	$("#slides ul li:first").before($("#slides ul li:last"));
	slider.css("left", "-350px");


	/*********************************
	Then, we start to define the
	funtions to move the slides to the
	left 
	*********************************/

	slideLeft = function(velo) {
	
		$("#slides ul li:last").after($("#slides ul li:first"));
		$("#slides ul").css("left","0px");
	
	
		$("#slides ul").stop().animate({left: "-350px"}, velo, function () {


	
		});

	
	
	};


	/********************************
	Then, we move them to the right
	********************************/


	slideRight = function(velo) {

	$("#slides ul").stop().animate({"left" : "0px"},velo,"linear", function() {


	$("#slides ul").css("left", "-350px");
	$("#slides ul li:first").before($("#slides ul li:last"));
	

		});

	};



	/**********************************
	Once we are done with the actions
	we set also an interval to let the
	slides move automaticly after the
	seconds defined at the variables on
	top pass
	***********************************/

	var run = setInterval("slideLeft()", timervelo);


	/**************************
	Click to move to the right
	**************************/

	$(".previous").click(function (velo) {
		slideRight();
	});

	/**************************
	Click to move to the left
	**************************/


	$(".next").click(function (velo) {
		slideLeft();
	});

	/*********************************
	The code is actually kinda messy
	but this is the easiest way i could
	came up with to design a simple
	carousel slideshow there are seve
	ral ways to achieve this same effect
	and several ways to get headaches 
	with it =x=
	*********************************/
	
    });

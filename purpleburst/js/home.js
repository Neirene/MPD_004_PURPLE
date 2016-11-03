// Home Programing

	/**************************
	JQUERY INITIALIZING
	**************************/
	$(document).ready(function() {
		
	/*********************
	Japanese box control
	*********************/
	
		$("#nihongobox").mouseover(function() {
			$("#riyodekimasen").fadeIn(600) });
		
		$("#nihongobox").mouseout(function() {
			$("#riyodekimasen").fadeOut(600) });
	

	/******************************
	Defining functions for slogans
	through jquery and js
	*******************************/	
		
		function w1 (){
		$("#welcome1").animate({left:0,opacity:1.0},600); 
		}

		function w2 (){
		$("#welcome2").animate({left:322,opacity:1.0},600);
		}
		
		function w3 (){
		$("#welcome3").animate({left:53,opacity:1.0},600);
		}
		
		
		function w4 (){
		$("#welcome4").animate({left:529,opacity:1.0},600);
		}

	/****************************
	Set delay between actions
	****************************/
		
		setTimeout(w1,800);
		setTimeout(w2,800);
		setTimeout(w3,800);
		setTimeout(w4,800);
		
		
	/******************************
	Home interface codes for the 
	boxes It also includes their delay 
	as well.
	******************************/

		
		function contactb () {
		$("#contactbox").fadeIn(800,function() { });
		}
		
		function nextlevel () {
		$("#nextlevelbox").fadeIn(800,function() { });
		}
		
		function backbg () {
		$("#backbgbox").fadeIn(800,function () { });
		}
		
		setTimeout(contactb,1400);
		setTimeout(nextlevel,1400);
		setTimeout(backbg,1900);
	
	
	/***************************
	Variable definition for the 
	elements related to the moving
	background behind the stripes
	***************************/
		
		var xcoords = 0;
		   
		setInterval(function () 
		{
			
			$("#alphabackground").animate({'backgroundPosition': + --xcoords + 'px'},30);},60);
			
		});
	
	/**************************
	...and with this we end the
	coding part of the Purple 
	Burst homepage.
	***************************/
	

$( document ).on( "pageinit", function( event ) {
	var panel_html = ''+
'<ul data-role="listview" data-inset="true">'+
    '<li><a href="index.html"> <img src="icons/home.png"/> Home</a></li>'+
	'<li><a href="Intro.html"> <img src="MeathGoldCoastIcon.gif"/> Welcome</a></li>'+
	'<li><a href="localservices.html"> <img src="icons/localbusiness.jpg"/>Businesses & Services</a></li>'+  
	'<li><a href="food.html"> <img src="icons/food.png"/> Food & Drink</a></li>'+
	'<li><a href="activities.html"> <img src="icons/ToDo.jpg"/> Things to Do</a></li>'+
	'<li><a href="attractions.html"> <img src="icons/attractions.png"/> Tourist Attractions</a></li>'+
	'<li><a href="hotels.html"> <img src="icons/hotel.png"/> Accommodation</a></li>'+

'</ul>';
		
		$('.panelhtml').html(panel_html);
		$('.panelhtml ul[data-role="listview"]').listview();
});

var map;
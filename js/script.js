$( document ).on( "pageinit", function( event ) {
	var panel_html = ''+
'<ul data-role="listview" data-inset="true">'+
    '<li><a href="index.html"> <img src="icons/home.png"/> Home</a></li>'+
	'<li><a href="Intro.html"> <img src="boat2014.jpeg"/> Welcome</a></li>'+
	'<li><a href="about.html"> <img src="icons/about.png"/> About</a></li>'+
'<li><a href="events.html"> <img src="icons/anchor.png"/> Programme</a></li>'+

	'<li><a href="attractions.html"> <img src="icons/attractions.png"/> Tourist Attractions</a></li>'+
	'<li><a href="food.html"> <img src="icons/food.png"/> Food & Drink</a></li>'+
	'<li><a href="hotels.html"> <img src="icons/hotel.png"/> Hotels</a></li>'+
	'<li><a href="contact.html"> <img src="icons/contact.png"/> Contact</a></li>'+




'<!--<li><a href="tour.html"> <img src="icons/Drogheda.png"/> Virtual Tour of Drogheda</a></li>'+

'-->'+
''+
'</ul>';
		
		$('.panelhtml').html(panel_html);
		$('.panelhtml ul[data-role="listview"]').listview();
});

var map;
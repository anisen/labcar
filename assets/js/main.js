function initMap(){
	var map= new google.maps.Map(document.getElementById("map"),{
		zoom:8,
		center:{lat:-33.4488897, lng: -70.6692655},
		mapTypeControl:false,
		zoomControl:false,
		streetViewControl:false
	});

	var autocompletadoInicio= new google.maps.places.Autocomplete(document.getElementById("partida"));
	autocompletadoInicio.bindTo("bounds", map);
	var autocompletadoFinal= new google.maps.places.Autocomplete(document.getElementById("destino"));
	autocompletadoFinal.bindTo("bounds", map);


}
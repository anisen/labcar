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

    function buscar(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	document.getElementById("trazar").addEventListener("click",buscar);
	var latitud,longitud;

	var funcionExito= function(posicion){
		latitud= posicion.coords.latitude;
		longitud= posicion.coords.longitude;

		var miUbicacion= new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map:map,

		});
		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}
	var funcionError=function(error){
		alert("Tenemos un problema con encontrar tu ubicacion");
	};
	var defaultBounds= new google.maps.LatLngBounds(
		new google.maps.LatLng(-33.8902, 151.1759),
		new google.maps.LatLng(-33.8474, 151.2631));

	var options={
		bounds:defaultBounds
	};
	var input=document.getElementById('pac-input');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

}
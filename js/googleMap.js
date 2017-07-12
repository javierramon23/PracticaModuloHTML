function initialize() {
    var myLatLng = {lat: 42, lng:-83};

    var mapProp = {
        center: myLatLng,
        zoom: 15,
        mapTypeID: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Aqui estoy"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
    var myPosition = {lat: 0, long:0};

    var mapProperties = {
        center: myPosition,
        zoom: 15,
        mapTypeID: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);

    var maker = new google.maps.Maker({
        position: myPosition,
        map: map,
        title: "Aqui estoy"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
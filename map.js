function initMap() {
    let options = {
        zoom: 13,
        center: {lat: 27.2046, lng: 77.4977}
    }

    let map = new google.maps.Map(document.getElementById('main_map'), options);

    let marker = new google.maps.Marker({
        position:{lat: 27.2046, lng: 77.4977},
        map: map
    });
}
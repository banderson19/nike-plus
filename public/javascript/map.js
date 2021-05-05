
async function initMap() {
    
    var options = {
        disableDefaultUI: true,
        zoom: 8,
        center: {lat: 40.7608, lng: -111.8910}
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options)

    // Listen for click on map
    // google.maps.event.addListener(map, 'click',
    //     function (event) {
    //         // add marker
    //         addMarker({coords: event.latLng})
    //     }
    // )
    if (map) {
        console.log('hello')
        await fetch('/api/trailhead', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then( res => res.json())
        .then(json => {
            console.log(json)
        })
    }

// var markers = [
//     {
//         coords: {lat: 40.70700, lng: -111.7592},
//         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//         content: '<h1> Granduer Peak</h1>'
//     },
//     {
//         coords: {lat: 40.7976, lng: -111.8537},
//         content: '<h1> Bobsled</h1>'
//     },
//     {
//         coords: {lat: 40.5059, lng: -111.8454},
//         content: '<h1> Corner Canyon </h1>'
//     }
// ]

// Loop through markers
// for (var i = 0; i < markers.length; i++) {
//     // add marker
//     addMarker(markers[i])
// }

// // Add Marker Function
//     function addMarker(props) {
//         var marker = new google.maps.Marker({
//             position: props.coords,
//             map: map,
//             // icon: props.iconImage
//         })
//         // Check for custom icon
//         if(props.iconImage) {
//             // set icon image
//             marker.setIcon(props.iconImage)
//         }

//         //Check content
//         if(props.content) {
//             var infoWindow = new google.maps.InfoWindow({
//                 content: props.content
//             })

//             marker.addListener('click', function() {
//                 infoWindow.open(map, marker)
//             })
//         }
//     }
}

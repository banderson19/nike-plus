async function initMap() {

    var options = {
        disableDefaultUI: true,
        zoom: 8,
        center: { lat: 40.7608, lng: -111.8910 }
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options)

    markers = []
    if (map) {
        console.log('hello')
        await fetch('/api/trailhead', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                markers.push(json)
                console.log('11', markers)
            })
    }

    console.log(markers[0])
    // Loop through markers
    markers[0].map( e => {
        const body = {
            trailName: e.trail_name,
            coords: {
                lat:  + e.latitude,
                lng: + e.longitude,
            },
            dog_friendly: e.dog_friendly
        }
        console.log('body', body)
        addMarker(body)
    })
    // Add Marker Function
    function addMarker(props) {
        console.log('props', props)
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        })
        console.log('111', props.trailName)
        if(props.dog_friendly == 1) {
            props.dog_friendly = 'Pet Friendly :))' 
        } else {
            props.dog_friendly = 'Not Pet Friendly :('
        }
        //Check content
        if (props.trailName) {
            var infoWindow = new google.maps.InfoWindow({
                content: `<h1> Trail name: ${props.trailName}</h1>`+
                        `<h2>${props.dog_friendly}</h2>`
            });
           
            marker.addListener('click', function () {
                console.log('hit')
                infoWindow.open(map, marker)
            })
        }
    }
}
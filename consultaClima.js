if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(location){
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;
        console.log(latitude +", " +  longitude);

        fetch ("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+ longitude +"&appid=e85c00f1c74c224cfdf9e8df5443bd04")
            .then(function(resposta){
                return resposta.json();
            })

            .then(function(tempo){
                console.log(tempo);
            })






    })
}
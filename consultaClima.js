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

            var data = new Date();
            var diaexten = "teste";
            dia = data.getDay();
            if (dia==0){
                var diaexten = "Domingo";
            }
            if (dia==1){
                var diaexten = "Segunda";
            }
            if (dia==2){
                var diaexten = "Terça";
            }
            if (dia==3){
                var diaexten = "Quarta";
            }
            if (dia==4){
                var diaexten = "Quinta";
            }
            if (dia==5){
                var diaexten = "Sexta";
            }
            if (dia==6){
                var diaexten = "Sábado";
            }

            console.log(diaexten);
            console.log(dia);
            



    })
}
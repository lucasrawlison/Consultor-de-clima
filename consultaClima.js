if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(location){
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;
        console.log(latitude +", " +  longitude);
        
        fetch ("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+ longitude +"&appid=e85c00f1c74c224cfdf9e8df5443bd04&units=metric&lang=pt_br")
        .then(function(resposta){
            return resposta.json();
        })
        
        .then(function(tempo){
            console.log(tempo);
            
            var data = new Date();
            var diaExten = "-";
            var nomeDoMes = "-";
            dia = data.getDay();
            mes = data.getMonth();
            diaNumero = data.getDate();
            
            if (dia==0){
                var diaExten = "Domingo";
            }
            if (dia==1){
                var diaExten = "Segunda";
            }
            if (dia==2){
                var diaExten = "Terça";
            }
            if (dia==3){
                var diaExten = "Quarta";
            }
            if (dia==4){
                var diaExten = "Quinta";
            }
            if (dia==5){
                var diaExten = "Sexta";
            }
            if (dia==6){
                var diaExten = "Sábado";
            }


            if (mes === 0) {
                nomeDoMes = "Janeiro";
            } else if (mes === 1) {
                nomeDoMes = "Fevereiro";
            } else if (mes === 2) {
                nomeDoMes = "Março";
            } else if (mes === 3) {
                nomeDoMes = "Abril";
            } else if (mes === 4) {
                nomeDoMes = "Maio";
            } else if (mes === 5) {
                nomeDoMes = "Junho";
            } else if (mes === 6) {
                nomeDoMes = "Julho";
            } else if (mes === 7) {
                nomeDoMes = "Agosto";
            } else if (mes === 8) {
                nomeDoMes = "Setembro";
            } else if (mes === 9) {
                nomeDoMes = "Outubro";
            } else if (mes === 10) {
                nomeDoMes = "Novembro";
            } else if (mes === 11) {
                nomeDoMes = "Dezembro";
            } else {
                nomeDoMes = "Número de mês inválido"; // Tratamento para números fora do intervalo de 0 a 11
            }
            
            console.log(dia + "- " + diaExten);
            console.log(mes);
            
            
            //capturar tags
            var tagTemp = document.getElementById("temp");
            var tagDia = document.getElementById("dia");
            var tagMes = document.getElementById("mes");
            var tagstatus = document.getElementById("status");







            //Captura variáveis de tempo
            var temp = tempo.main.temp;
            var status = tempo.weather["0"].description;
            var statusAlt = status.charAt(0).toUpperCase() + status.slice(1);
            console.log("temperatura: " + temp);
            console.log(statusAlt);
            
            
            
            //define tags
            
            tempNum = Number(temp.toString().slice(0, 2));
            tagTemp.textContent = tempNum + "°C";
            tagDia.textContent = diaExten.toUpperCase();
            tagMes.textContent = nomeDoMes + ", " + diaNumero;
            tagstatus.textContent = statusAlt;

            



            })








            



    })
}
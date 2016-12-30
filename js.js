$(document).ready(function () {
        
    $.ajax({             
        url: "http://api.openweathermap.org/data/2.5/weather?callback=haha",
        method: "GET",
        data: {
            q: $("#city").text() + "," + $("#country").text(),
            appid: "061f24cf3cde2f60644a8240302983f2",
            units: "metric"
        },
        dataType: "jsonp",
        jsonpCallback:"haha",
        success: function (respond) {
            console.log(respond.weather[0].main);
            console.log(respond.weather[0].description);
            console.log(respond.weather[0].icon);
            console.log(respond.main.temp);
            $("#weather-main").text(respond.weather[0].main);
            $("#temperature").text(respond.main.temp);
            $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + respond.weather[0].icon + ".png");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    } 
    });    
    
});
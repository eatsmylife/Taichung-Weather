$(document).ready(function () {  
    
    $.ajax({             
        url: "http://api.openweathermap.org/data/2.5/weather",
        method: "GET",
        data: {
            q: "taichung",
            appid: "061f24cf3cde2f60644a8240302983f2",
            units: "metric"
        },
        dataType: "json",
        success: function (respond) {
            console.log(respond.weather[0].main);
            console.log(respond.weather[0].description);
            console.log(respond.weather[0].icon);
            console.log(respond.main.temp);            
        }
    });    
    
});
var weatherApiKey = "1fb1084d220c028efef4950c1ed7da26";
function getWeather(city) {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + weatherApiKey + "&units=imperial";
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + weatherApiKey + "&units=imperial";

    $.ajax({
    url:queryURL,
    method:"GET"
    // gets curent information for weather
    }).then(function(response) {

        $("#city").text(response.name); 
        $("#temp").text(response.main.temp + " F");
        $("#humidity").text(response.main.humidity +"%");
        $("#wind").text(response.wind.speed );
        $("#high").text(response.main.temp_max + " F");
        $("#low").text(response.main.temp_min + " F");
       
    })

    $.ajax({
        url:fiveDayURL,
        method: "GET"
        // gets the 5 day forcast info
    }).then(function(fiveDayRes){
        console.log(fiveDayRes);
        for(i=0; i<fiveDayRes.list.length; i+=8){
            console.log(fiveDayRes.list[i].main.temp);
           
            $(".index-"+i).text(fiveDayRes.list[i].main.temp);
        }
    })
}
// whne this is clicked, the info is displayed
$("#search-button").on("click", function() {
    var city = $("#search-value").val();
 
    getWeather(city);
    });



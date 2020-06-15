var date = moment().format("MMMM Do YYYY");
$(".date").text(date);

function displayWeather(location) {
    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=61f00a845310c4a4251fd6bfc588f89b&units=imperial",
    })}.then(function()){
        
    }
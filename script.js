var searchBtn = $("#searchBtn");

searchBtn.click(currentWeather);
function currentWeather() {
  var city = $("#city").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=61f00a845310c4a4251fd6bfc588f89b"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var date = moment().format("M/D/YYYY");
    $(".date").text(date);
    var cityName = response.name;
    $(".city").text(cityName) 
    var iconCode = response.weather[0].icon
    var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".icon").attr("src", iconURL);
    var temperature = response.main.temp
    $(".temperature").text("Temperature: " + temperature + "°F");
    var humidity = response.main.humidity;
    $(".humidity").text("Humidity: " + humidity + "%");
    var windSpeed = response.wind.speed;
    $(".windSpeed").text("Wind Speed: " + windSpeed + "MPH");

    var lat = response.coord.lat
    var lon = response.coord.lon
    var uvIndexQueryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=61f00a845310c4a4251fd6bfc588f89b&lat="+lat+"&lon="+lon
    $.ajax({
        url: uvIndexQueryUrl,
        method: "GET"
    }).then(function(data){
        console.log(data);
        var uvIndex = data.value
        
        if (uvIndex > 0 && uvIndex < 4){
           $(".UVIndex").text("UV Index: " + uvIndex).css("background","green");
        } else if (uvIndex > 4 && uvIndex < 7){
            $(".UVIndex").text("UV Index: " + uvIndex).css("background","yellow");
        } else {
            $(".UVIndex").text("UV Index: " + uvIndex).css("background","red");
        }
    })
  })
};


searchBtn.click(forecast);
function forecast (){
    var forecastCity = $("#city").val();
    var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+forecastCity+"&units=imperial&appid=61f00a845310c4a4251fd6bfc588f89b"
    $.ajax({
        url: forecastQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var dateOne = moment().add(1,"days").format("M/D/YYYY");
        $(".dateOne").text(dateOne)
        var dateTwo = moment().add(2,"days").format("M/D/YYYY");
        $(".dateTwo").text(dateTwo)
        var dateThree = moment().add(3,"days").format("M/D/YYYY");
        $(".dateThree").text(dateThree)
        var dateFour = moment().add(4,"days").format("M/D/YYYY");
        $(".dateFour").text(dateFour)
        var dateFive = moment().add(5,"days").format("M/D/YYYY");
        $(".dateFive").text(dateFive)

        var temperatureOne = response.list[0].main.temp
        $(".temperatureOne").text("Temp: " + temperatureOne +"°F");
        var temperatureTwo = response.list[8].main.temp
        $(".temperatureTwo").text("Temp: " + temperatureTwo +"°F");
        var temperatureThree = response.list[16].main.temp
        $(".temperatureThree").text("Temp: " + temperatureThree +"°F");
        var temperatureFour = response.list[24].main.temp
        $(".temperatureFour").text("Temp: " + temperatureFour +"°F");
        var temperatureFive = response.list[32].main.temp
        $(".temperatureFive").text("Temp: " + temperatureFive +"°F");

        var humidityOne = response.list[0].main.humidity
        $(".humidityOne").text("Humidity: " + humidityOne +"%");
        var humidityTwo = response.list[8].main.humidity
        $(".humidityTwo").text("Humidity: " + humidityTwo +"%");
        var humidityThree = response.list[16].main.humidity
        $(".humidityThree").text("Humidity: " + humidityThree +"%");
        var humidityFour = response.list[24].main.humidity
        $(".humidityFour").text("Humidity: " + humidityFour +"%");
        var humidityFive = response.list[32].main.humidity
        $(".humidityFive").text("Humidity: " + humidityFive +"%");
    })
}


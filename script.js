var searchBtn = $("#searchBtn");

searchBtn.click(currentWeather);
function currentWeather() {
  var city = $("#city").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=61f00a845310c4a4251fd6bfc588f89b"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var date = moment().format("MMMM Do, YYYY");
    $(".date").text(date);
    var cityName = response.name;
    $(".city").text(cityName) 
    var iconCode = response.weather[0].icon
    var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".icon").attr("src", iconURL);
    var temperature = (((response.main.temp - 273.15)*9)/5) + 32;
    $(".temperature").text("Temperature: " + temperature + "°F");
    var humidity = response.main.humidity;
    $(".humidity").text("Humidity: " + humidity + "%");
    var windSpeed = response.wind.speed;
    $(".windSpeed").text("Wind Speed: " + windSpeed + "MPH");
  })
};
// Services

weatherApp.service("cityService",function(){
    
    this.city="New York, NY";
    
});

weatherApp.service("weatherService", ["$resource", function($resource){
    
   
    this.getWeather = function(city, days){
    
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherAPI.get({ APPID: "96556b236a1fec477b6f4572293b886b", q: city, cnt: days });
      
    }
    
    
}]);
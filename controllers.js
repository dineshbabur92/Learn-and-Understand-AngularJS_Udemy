// Controllers

weatherApp.controller("homeController",["$scope", "cityService", function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch("city", function(){
        
        cityService.city = $scope.city;
        
    });
    
}]);

weatherApp.controller("forecastController",["$scope", "$resource", "$routeParams", "$log", "cityService", function($scope, $resource, $routeParams, $log, cityService){
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ APPID: "96556b236a1fec477b6f4572293b886b", q: $scope.city, cnt: $scope.days });
    
    //$log.log($scope.weatherResult);
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);c
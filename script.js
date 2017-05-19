var app=angular.module("computer",['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/main',{
    templateUrl: 'main.html',
    controller:'MainCtrl'
    
  }).
  when('/about',{
    templateUrl: 'about.html',
    controller:'MainCtrl'
    
  }).
  when('/services',{
    templateUrl: 'services.html',
    controller:'ServicesCtrl'
    
  }).
  when('/contacts',{
    templateUrl: 'contacts.html',
    controller:'ContactsCtrl'
    
  }).
  otherwise({redirectTo:'/main'})
}])
.controller('MainCtrl',['$scope',function($scope){
  
}])

.controller('ServicesCtrl',['$scope','$http',function($scope,$http){
  $http.get('services.json').then(function(response){
    console.log(response.data);
    $scope.services=response.data;
  });
  
}])
  
.controller('ContactsCtrl',['$scope','$http',function($scope,$http){
    $http.get('locations.json').then(function(response){
        console.log(response.data);
        $scope.locations=response.data;
    });

  
}]);


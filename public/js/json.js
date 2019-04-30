var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){
    $scope.addItem = function(){
        $http({
            method:"POST",
            url:"/add",
            data:{jsonSource:$scope.jsonSource,jsonDestination:$scope.jsonDestination}
        }).then(function mySuccess(response){
            $scope.jsonResult = response.result.jsonResult
        },function myError(response){
            $scope.jsonResult = response.result.statusContext
        })
    }
})
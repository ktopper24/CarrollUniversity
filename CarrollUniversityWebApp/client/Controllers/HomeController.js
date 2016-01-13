app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $scope.login = function () {
        $scope.loginStatus = "success";
    };
}])
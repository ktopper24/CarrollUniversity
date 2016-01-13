app.controller('AddCourseController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    //Need to put objectType in the angular routes

    $scope.reset = function () {
        $scope.object = {};
    };
    $scope.addCourse = function () {
        $http.post('api/' + $scope.objectType, $routeParams.objectType);
        $scope.reset();
    }

    //$scope.resetProfessor = function () {
    //$scope.professor = {};
    //}


}])
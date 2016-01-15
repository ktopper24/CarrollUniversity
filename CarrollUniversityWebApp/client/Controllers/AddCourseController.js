app.controller('AddCourseController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    //Need to put objectType in the angular routes

    $scope.reset = function () {
        $scope.course = {};
    };
    $scope.addCourse = function () {
        $http.post('api/courses', $scope.course);
        $scope.reset();
    }

    //$scope.resetProfessor = function () {
    //$scope.professor = {};
    //}


}])
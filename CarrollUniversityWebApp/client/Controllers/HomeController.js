app.controller('HomeController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.showSections = function (section) {
        $scope.currentSection = section;
        $scope.hideSections = false;
    };

    var gotCourses = function (answer) {
        $scope.sections = answer.data;

        $scope.hideCourses = false;

    };

    var onError = function (reason) {
        $scope.error = "Error";
    };




    if ($routeParams.id) {
        $scope.hidelogin = true;
        $scope.hideSections = true;
        $scope.hideSignUp = false;

        $http.get('api/course/' + $routeParams.id)
            .then(gotCourses, onError);

    }
    else {
        $scope.hidelogin = false;
        $scope.hideCourses = true;
        $scope.hideSections = true;
        $scope.hideSignUp = true;

        $scope.login = function () {
            $http.get('/api/student?username=' + $scope.student.username)
                .then(gotStudent, onError);
        };

        var gotStudent = function (answer) {
            $scope.user = answer.data;

            if ($scope.user.Password) {
                if ($scope.student.password == $scope.user.Password) {
                    alert("Log in successful");
                }
                else {
                    alert("Invalid Password");
                }
            }
            else {
                alert("Invalid Username, please register as a user");
            }
            $scope.hidelogin = true;
            $scope.hideSignUp = false;

            $http.get('api/course/' + $scope.user.Student_ID)
                .then(gotCourses, onError);
        };

    }
}]);
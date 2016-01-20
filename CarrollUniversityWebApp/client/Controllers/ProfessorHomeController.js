app.controller('ProfessorHomeController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    //$scope.showSections = function (section) {
    //    $scope.currentSection = section;
    //    $scope.hideSections = false;
    //};

    //var gotCourses = function (answer) {
    //    $scope.sections = answer.data;

    //    $scope.hideCourses = false;

    //};

    //var onError = function (reason) {
    //    $scope.error = "Error";
    //};

    //if ($routeParams.id) {
    //    $scope.hidelogin = true;
    //    $scope.hideSections = true;

    //    $http.get('api/course/0/' + $routeParams.id)
    //        .then(gotCourses, onError);

    //}
    //else {
    //    $scope.hidelogin = false;
    //    $scope.hideCourses = true;
    //    $scope.hideSections = true;
    //    $scope.hideSignUp = true;

    //    $scope.login = function () {
    //        $http.get('/api/professor?username=' + $scope.professor.username)
    //            .then(gotProfessor, onError);
    //    };

    //    var gotProfessor = function (answer) {
    //        $scope.user = answer.data;

    //        if ($scope.user.Password) {
    //            if ($scope.professor.password == $scope.user.password) {
    //                alert("Log in successful");
    //            }
    //            else {
    //                alert("Invalid Password");
    //            }
    //        }
    //        else {
    //            alert("Invalid Username, please register as a user");
    //        }
    //        $scope.hidelogin = true;
    //        $scope.hideSignUp = false;

    //        $http.get('api/course/0/' + $scope.user.Professor_ID)
    //            .then(gotCourses, onError);
    //    };

   // }
}]);
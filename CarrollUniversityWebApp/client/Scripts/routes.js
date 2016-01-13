var app = angular.module('CarrollUniversityApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '/client/templates/home.html'
        })
        .when('/create/', {
            controller: 'AddCourseController',
            templateUrl: '/client/templates/addCourse.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

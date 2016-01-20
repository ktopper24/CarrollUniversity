var app = angular.module('CarrollUniversityApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/:id?', {
            controller: 'HomeController',
            templateUrl: '/client/templates/home.html'
        })
        .when('/professor/:id?', {
            controller: 'ProfessorHomeController',
            templateUrl: '/client/templates/professor.html'
        })
        .when('/create/course', {
            controller: 'AddCourseController',
            templateUrl: '/client/templates/addCourse.html'
        })
        .when('/create/building', {
            controller: 'AddBuildingController',
            templateUrl: '/client/templates/addBuilding.html'
        })
        .when('/create/section', {
            controller: 'AddSectionController',
            templateUrl: '/client/templates/addSection.html'
        })
        .when('/register/professor', {
            controller: 'RegisterProfessorController',
            templateUrl: '/client/templates/registerProfessor.html'
        })
        .when('/register/student', {
            controller: 'RegisterStudentController',
            templateUrl: '/client/templates/registerStudent.html'
        })
        .when('/signUp/:id2', {
            controller: 'SignUpController',
            templateUrl : '/client/templates/signUp.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
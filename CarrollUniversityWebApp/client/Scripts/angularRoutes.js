var app = angular.module('CarrollUniversityApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: './content/templates/home.html'
		})
		.when('/addCourse', {
			controller: 'AddCourseController',
			templateUrl: './content/templates/addCourse.html'
		});
});
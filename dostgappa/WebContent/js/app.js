'use strict';

var App = angular.module("myApp", ["ngRoute"]);

App.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("#/", {
        templateUrl : "index.html"
    })
    .when("/login", {
        templateUrl : "login.html"        
    })
    .when("/aboutus", {
        templateUrl : "aboutus.html"
    })
     .when("/contactus", {
        templateUrl : "contactus.html"
    })
    .when("/userreg", {
        templateUrl : "userreg.html"        
    })
    .when("/blog", {
        templateUrl : "blog.html"        
    })
    .when("/forum", {
        templateUrl : "forum.html"        
    })
    .when("/singlepost", {
        templateUrl : "singlepost.html"        
    })
    .when("/readpost", {
        templateUrl : "readpost.html"        
    })
    .when("/secondpost", {
        templateUrl : "secondpost.html"        
    })
    .when("/dghome", {
        templateUrl : "home.html"        
    });
    $locationProvider.html5Mode({
    	 	  requireBase: false
    	});
});
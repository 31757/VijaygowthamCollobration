'use strict';

var App = angular.module("myApp", ["ngRoute"]);
App.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/login", {
        templateUrl : "login.html"        
    })
    .when("/about", {
        templateUrl : "about.html"
    })
     .when("/contact", {
        templateUrl : "contact.html"
    })
    .when("/userreg", {
        templateUrl : "userreg.html"        
    })
    .when("/blog", {
        templateUrl : "blog.html"        
    })
    .when("/addblog", {
        templateUrl : "addblog.html"        
    })
    .when("/updateblog", {
        templateUrl : "updateblog.html"        
    })
    .when("/forum", {
        templateUrl : "forum.html"        
    })
    .when("/addforum", {
        templateUrl : "addforum.html"        
    })
    .when("/updateforum", {
        templateUrl : "updateforum.html"        
    })
    .when("/chat", {
        templateUrl : "chat.html"        
    })
    .when("/vanuhome", {
        templateUrl : "vanuchathome.html"        
    });

   
});
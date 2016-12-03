'use strict';

angular.module('myApp').factory('Forumvice',
		[ '$http', '$q', function($http, $q) {

			var REST_SERVICE_URI = 'http://localhost:9050/vanuchatserver/fourm';

			var factory = {
				fetchAllForum : fetchAllForum,
				createForum : createForum,
				updateForum : updateForum,

			};
			return factory;
			function fetchAllForum() {
				var deferred = $q.defer();
				$http.get(REST_SERVICE_URI).then(function(response) {
					deferred.resolve(response.data);
				}, function(errResponse) {
					console.error('Error while fetching Forums');
					deferred.reject(errResponse);
				});
				return deferred.promise;
			}
			function createForum(Forum) {
				var deferred = $q.defer();
				$http.post(REST_SERVICE_URI, Forum).then(function(response) {
					deferred.resolve(response);
				}, function(errResponse) {
					console.error('Error while creating Forum');
					deferred.reject(errResponse);
				});
				return deferred.promise;
			}
			function updateForum(Forum, id) {
				var deferred = $q.defer();
				$http.put(REST_SERVICE_URI + id, Blog).then(function(response) {
					deferred.resolve(response.data);
				}, function(errResponse) {
					console.error('Error while updating Forum');
					deferred.reject(errResponse);
				});
				return deferred.promise;
			}
			function postblogComments(Forum, id) {
				var deferred = $q.defer();
				$http.put(REST_SERVICE_URI + id, Forum).then(function(response) {
					deferred.resolve(response.data);
				}, function(errResponse) {
					console.error('Error while updating Forum');
					deferred.reject(errResponse);
				});
				return deferred.promise;
			}
		} ]);

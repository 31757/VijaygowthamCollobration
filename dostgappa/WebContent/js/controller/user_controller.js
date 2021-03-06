'use strict';

angular
		.module('myApp')
		.controller(
				'UserControl',
				[
						'$scope',
						'UserService',
						'$location',
						'$window',
						function($scope, UserService, $location, $window) {
							var self = this;
							self.user = {
								fname : '',
								username : '',
								address : '',
								email : '',
								phno : null,
								password : ''
							};
							self.usercred = {
								username : '',
								password : '',
								status : 1,
								role : 'ROLE_USER'
							};
							self.users = [];
							self.userscred = [];

							self.submit = submit;
							self.edit = edit;
							self.remove = remove;
							self.reset = reset;
							self.login = login;

							function fetchAllUsers() {
								UserService
										.fetchAllUsers()
										.then(
												function(d) {
													self.users = d;
												},
												function(errResponse) {
													console
															.error('Error while fetching Users');
												});
							}

							function loginUser(usercred) {
								UserService
										.loginUser(usercred)
										.then(
												function(response)
												{
													var url = "http://localhost:9050/dostgappa/#/blog";
													$window.location.href = url;
												},
												function(errResponse)
												{
													$window
													.alert("UserName and Password did not match");
												});
							}
							function createUser(user) {
								UserService
										.createUser(user)
										.then(
												function(response) {
													$window
															.alert("Login now to begin");
													var url = "http://localhost:9050/dostgappa/#/login";
													$window.location.href = url;
												},
												function(errResponse) {
													$window
															.alert("The User Name Already Exists");
												});
							}

							function updateUser(user, id) {
								UserService
										.updateUser(user, id)
										.then(
												fetchAllUsers,
												function(errResponse) {
													console
															.error('Error while updating User');
												});
							}

							function deleteUser(id) {
								UserService
										.deleteUser(id)
										.then(
												fetchAllUsers,
												function(errResponse) {
													console
															.error('Error while deleting User');
												});
							}

							function submit() {
								createUser(self.user);

							}

							function login() {
								loginUser(self.usercred);

							}

							function edit(id) {
								console.log('id to be edited', id);
								for (var i = 0; i < self.users.length; i++) {
									if (self.users[i].id === id) {
										self.user = angular.copy(self.users[i]);
										break;
									}
								}
							}

							function remove(id) {
								console.log('id to be deleted', id);
								if (self.user.id === id) {// clean form if the
															// user to be
															// deleted is shown
															// there.
									reset();
								}
								deleteUser(id);
							}

							function reset() {
								self.user = {
									id : null,
									username : '',
									address : '',
									email : ''
								};
								$scope.myForm.$setPristine(); // reset Form
							}

						} ]);

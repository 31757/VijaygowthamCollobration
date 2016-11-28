'use strict';

angular.module('myApp').controller(
		'ForumControl',
		[
				'$scope',
				'ForumService',
				'$location',
				'$window',
				function($scope, ForumService, $location, $window) {
					var self = this;
					self.forum = {
						forumid : '',
						forumtopic : '',
						forumsubtopic : '',
						
					};
					self.forumcomm = {
						forumcommentid : '',
						forumid : '',
						username : '',
						comments : ''
					};
					self.forum = [];
					self.forumcomm = [];

					self.submit = submit;
					self.edit = edit;
					self.remove = remove;
					self.reset = reset;
					self.login = login;

					function fetchAllForum() {
						ForumService.fetchAllForum().then(function(d) {
							self.forum = d;
						}, function(errResponse) {
							console.error('Error while fetching Forum');
						});
					}

					function createForum(forum) {
						ForumService.createForum(forum).then(function(response) {
							$window.alert("Login now to begin");
							var url = "http://localhost:9050/dostgappa/#/forum";
							$window.location.href = url;
						}, function(errResponse) {
							$window.alert("The Forum Already Exists");
						});
					}

					function updateForum(forum, id) {
						ForumService.updateForum(bforum, id).then(fetchAllForum,
								function(errResponse) {
									console.error('Error while updating Forum');
								});
					}

					function deleteForum(id) {
						ForumService.deleteForum(id).then(fetchAllForum,
								function(errResponse) {
									console.error('Error while deleting Forum');
								});
					}

					function submit() {
						createForum(self.Forum);

					}

					function login() {
						loginforum(self.forumcomm);

					}

					function edit(id) {
						console.log('id to be edited', id);
						for (var i = 0; i < self.forum.length; i++) {
							if (self.forum[i].id === id) {
								self.forum = angular.copy(self.forum[i]);
								break;
							}
						}
					}

					function remove(id) {
						console.log('id to be deleted', id);
						if (self.forum.id === id) {// clean form if the user to
													// be deleted is shown
													// there.
							reset();
						}
						deleteForum(id);
					}

					function reset() {
						self.Forum = {
								forumid : null,
								forumtopic : '',
								forumsubtopic : '',
								
						};
						$scope.myForm.$setPristine(); // reset Form
					}

				} ]);

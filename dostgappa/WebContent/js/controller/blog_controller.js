'use strict';

angular.module('myApp').controller(
		'BlogControl',
		[
				'$scope',
				'BlogService',
				'$location',
				'$window',
				function($scope, BlogService, $location, $window) {
					var self = this;
					self.blog = {
						blogid: '',
						userid: '',
						blogtitle: '',
						blogpostcontent: '',
						tags: '',
						date: ''
					};
					self.blogcomm = {
						blogcommentid : '',
						blogid : '',
						username : '',
						comments : ''
					};
					self.blogs = [];
					self.blogcomm = [];

					self.submit = submit;
					self.edit = edit;
					self.remove = remove;
					self.reset = reset;
					self.login = login;
					
					fetchAllBlog();

					function fetchAllBlog() {
						BlogService.fetchAllBlog().then(function(d) {
							self.blogs = d;
						}, function(errResponse) {
							console.error('Error while fetching Blogs');
						});
					}

					function createBlog(blog) {
						BlogService.createBlog(blog).then(function(response) {
							$window.alert("Login now to begin");
							var url = "http://localhost:9050/dostgappa/#/blog";
							$window.location.href = url;
						}, function(errResponse) {
							$window.alert("The Blog Already Exists");
						});
					}

					function updateBlog(blog, id) {
						BlogService.updateBlog(blog, id).then(fetchAllBlog,
								function(errResponse) {
									console.error('Error while updating Blog');
								});
					}

					function deleteBlog(id) {
						BlogService.deleteBlog(id).then(fetchAllBlog,
								function(errResponse) {
									console.error('Error while deleting Blog');
								});
					}

					function submit() 
					{
						createBlog(self.blog);

					}

					function login() {
						loginblog(self.blogcomm);

					}

					function edit(id) {
						console.log('id to be edited', id);
						for (var i = 0; i < self.blog.length; i++) {
							if (self.blog[i].id === id) {
								self.blog = angular.copy(self.blog[i]);
								break;
							}
						}
					}

					function remove(id) {
						console.log('id to be deleted', id);
						if (self.blog.id === id) {// clean form if the user to
													// be deleted is shown
													// there.
							reset();
						}
						deleteBlog(id);
					}

					function reset() {
						self.blog = {
							blogid : null,
							username : '',
							blogtitle : '',
							blogpostcontent : '',
							tags : '',
							Dateofcreation : ''
						};
						$scope.myForm.$setPristine(); // reset Form
					}

				} ]);

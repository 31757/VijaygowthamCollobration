<%@include file="common-header.jsp" %>
<div class="container" ng-controller="UserController as ctrl">
          <div class="panel panel-default">
          	<br/><br/>
              <div class="panel-heading"><span class="lead">User Registration Form </span></div>
              <br/><br/>
              <div class="formcontainer">
                  <form ng-submit="ctrl.submit()" name="myForm" class="form-horizontal" method="post">
                      <div class="row">
                          <div class="form-group col-md-6">
                              <label class="col-md-2 control-lable" for="file">UserName</label>
                              <div class="col-md-7">
                                  <input type="text" ng-model="ctrl.user.username" name="uname" class="username form-control input-sm" placeholder="Enter your username" required ng-minlength="3"/>
                              </div>
                              <div class="has-error" ng-show="myForm.$dirty">
                                      <span ng-show="myForm.uname.$error.required">This is a required field</span>
                                      <span ng-show="myForm.uname.$error.minlength">Minimum length required is 3</span>
                                      <span ng-show="myForm.uname.$invalid">This field is invalid </span>
                                  </div>                              
                          </div>
                      </div>
                      
                       <div class="row">
                          <div class="form-group col-md-6">
                              <label class="col-md-2 control-lable" for="file">Name</label>
                              <div class="col-md-7">
                                  <input type="text" ng-model="ctrl.user.fname" name="fname" class="username form-control input-sm" placeholder="Enter your name" required ng-minlength="3"/>
                              </div>
                              <div class="has-error" ng-show="myForm.$dirty">
                                      <span ng-show="myForm.fname.$error.required">This is a required field</span>
                                      <span ng-show="myForm.fname.$error.minlength">Minimum length required is 3</span>
                                      <span ng-show="myForm.fname.$invalid">This field is invalid </span>
                              </div>
                           </div>
                          </div>
                      </div>
                         
                        <div class="row"> 
                          <div class="form-group col-md-12">
                              <label class="col-md-2 control-lable" for="file">Address</label>
                              <div class="col-md-7">
                                  <input type="text" ng-model="ctrl.user.address" name="address" class="form-control input-sm" placeholder="Enter your Address."/>
                              </div><div class="has-error" ng-show="myForm.$dirty">
                                      <span ng-show="myForm.address.$error.required">This is a required field</span>
                                      <span ng-show="myForm.address.$invalid">This field is invalid </span>
                              </div>
                              
                          </div>
                      </div>
                      
                      <div class="row">
                          <div class="form-group col-md-12">
                              <label class="col-md-2 control-lable" for="file">Email</label>
                              <div class="col-md-7">
                                  <input type="email" ng-model="ctrl.user.email" name="email" class="email form-control input-sm" placeholder="Enter your Email" required/>
                                </div>
                                <div class="has-error" ng-show="myForm.$dirty">
                                      <span ng-show="myForm.email.$error.required">This is a required field</span>
                                      <span ng-show="myForm.email.$invalid">This field is invalid </span>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="form-group col-md-12">
                              <label class="col-md-2 control-lable" for="file">Phone Number</label>
                              <div class="col-md-7">
                                  <input type="number" ng-model="ctrl.user.phno" name="phno" class="email form-control input-sm" placeholder="Enter your phnoo" required/>
                                </div>
                                <div class="has-error" ng-show="myForm.$dirty">
                                      <span ng-show="myForm.phno.$error.required">This is a required field</span>
                                      <span ng-show="myForm.phno.$invalid">This field is invalid </span>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="form-group col-md-12">
                              <label class="col-md-2 control-lable" for="file">Password</label>
                              <div class="col-md-7">
                                  <input type="password" ng-model="ctrl.user.password" name="password" class="email form-control input-sm" placeholder="Enter your password" required/>
                                </div>
                                <div class="has-error" ng-show="myForm.$dirty">
                                      <span ng-show="myForm.password.$error.required">This is a required field</span>
                                      <span ng-show="myForm.password.$error.minlength">Minimum length required is 3</span>
                                      <span ng-show="myForm.password.$invalid">This field is invalid </span>
                              </div>
                          </div>
                      </div>
						<br/><br/>
                      <div class="row">
                              <input type="submit"  value="Register" class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid">
                              <button type="button" ng-click="ctrl.reset()" class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset</button>
                     </div>
                  </form>
              </div>
          </div>
  </div>   
<%@include file="common-footer.jsp" %>
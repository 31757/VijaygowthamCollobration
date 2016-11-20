<!DOCTYPE html>
<html lang="en">
<head>
<title>VANUCHAT</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link href="css/bootstrap.css" rel="stylesheet"/>
<link href="css/style.css" rel="stylesheet"/>
<link href="font/css/fontello.css" rel="stylesheet"/>
<link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>
<base />
</head>
<body ng-app="myApp">

<div class="navbar">
  <div class="navbar-inner">
    <div class="container"> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> 
    <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a> 
    <img class="brand" src="img/user.jpg" alt="">
      <ul class="nav nav-collapse pull-right">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#login">Login</a></li>        
      </ul>
      <div class="nav-collapse collapse"></div>
    </div>
  </div>
</div>
  <div class="s-12 m-8 l-9">
               <div class="box">
                  <div class="line">
                     <div id="owl-demo" class="owl-carousel owl-theme  margin-bottom">
                        <div class="item"><img src="img/940x380.jpg" alt=""></div>
                        <div class="item"><img src="img/940x380-2.jpg" alt=""></div>
                        <div class="item"><img src="img/940x380-3.jpg" alt=""></div>
                     </div>
                  </div>
                  <section>
                     <article class="line">
                        <div class="margin">
                           <div class="s-12 m-12 l-2 date">
                              <i class="icon-calendar"></i>
                              <p><span>25</span><br />march</p>
                           </div>
                           <div class="s-12 m-12 l-10">
                              <h2>Header of article</h2>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                                 dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
                                 lobortis nisl ut aliquip ex ea commodo consequat.
                              </p>
                              <br />
                              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore 
                                 eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril 
                                 delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue 
                                 nihil imperdiet doming id quod mazim placerat facer possim assum. 
                              </p>
                              <hr>
                           </div>
                        </div>
                     </article>
                </section>
               </div>
         </div>
<div class="footer" href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css">
 <div class="container">
    <p class="pull-left"></p>
    <p class="pull-right"></p>
  </div>

<script src="js/angular.min.js"></script>
<script src="js/angular-route.js"></script>
<script src="js/jquery-1.10.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/app.js"></script>
<script src="js/service/user_service.js"></script>
<script src="js/controller/user_controller.js"></script>

</div>         
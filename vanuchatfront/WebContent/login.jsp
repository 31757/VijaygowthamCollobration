<%@include file="common-header.jsp" %>
<div class="container" style="margin-top: 100px;">
<table>
<tr>
<td width="40%">
<div class="card card-container">
   <img src="img/register-secure-security-user-login-icon--7.png" height="100px" /><br/><br/><br/>
   <p id="profile-name" class="profile-name-card"></p>
   <span id="reauth-email" class="reauth-email"></span>
   <form method="POST" action="perform_login" class="form-signin">
      <span id="reauth-email" class="reauth-email"></span>
      <input id="inputusername" name="username" type="text" class="form-control" placeholder="UserName" required="true" />
      <input id="inputpassword" type="password" id="password" name="password" class="form-control" placeholder="Password" required="true"/>
      <button type="submit" class="btn btn-lg btn-primary btn-block btn-signin">Login</button>
      <a href="forgotpass" class="btn btn-info btn-block">Help to login</a>
   </form>
</div>
</td>
<td width="20%"/>
<td width="40%">
<div class="card card-container">
   <img src="img/register1.png" height="100px" />
   <p style="font-size: x-large;">Register now for <span>FREE</span></p>
   <ul  class="list-unstyled" style="text-align: justify; font-size: large; color:silver;">
        <li><span  style="font-size: x-large;" > Share Your Ideas</span> </li>
        <li><span  style="font-size: x-large;"> Chat with Friends</span> </li>
        <li><span  style="font-size: x-large;"> Post your Thoughts</span> </li>
        <li><span  style="font-size: x-large;"> Post your Comments</span> </li>
   </ul>
   <p><a href="userreg.jsp" class="btn btn-info btn-block">Yes please, register now!</a></p>
</div>
</td>
</tr>
</table>
</div>
<%@include file="common-footer.jsp" %>
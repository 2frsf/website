<!DOCTYPE html>
<html>
<head>
 <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
 <link rel="stylesheet" type="text/css" href="Mainpagecss.css">
  <link rel="stylesheet" type="text/css" href="acccss.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>2frsf</title>
</head>

<body>

  <ul class="topnav">
    <li><span class="Logo" ><img src="Logo.png" height="36" width="90"></span></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Apps</a></li>
    <li><a href="#">Account</a></li>
    <li><a href="#"> Contact </a></li>

  </ul>

  <?php
  require('db.php');
  if (isset($_REQUEST['username'])){
  	$username = stripslashes($_REQUEST['username']);
  	$username = mysqli_real_escape_string($con,$username);
  	$email = stripslashes($_REQUEST['email']);
  	$email = mysqli_real_escape_string($con,$email);
  	$password = stripslashes($_REQUEST['password']);
  	$password = mysqli_real_escape_string($con,$password);
  	$trn_date = date("Y-m-d H:i:s");
          $query = "INSERT into `users` (username, password, email, trn_date)
  VALUES ('$username', '".md5($password)."', '$email', '$trn_date')";
          $result = mysqli_query($con,$query);
          if($result){
              echo "<div class='form'>
  <h3>You are registered successfully.</h3>
  <br/>Click here to <a href='login.php'>Login</a></div>";
          }
      }else{
  ?>
  <div class="form">
  <h1>Registration</h1>
  <form name="registration" action="" method="post">
  <input type="text" name="username" placeholder="Username" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="password" name="password" placeholder="Password" required />
</br>
  <input type="submit" name="submit" value="Register" />
  </form>
  </div>
  <?php } ?>

</body>

</html>

<?php
$na=$_POST["name"];
$pass=$_POST["password"];
$con=mysqli_connect("localhost","chenmo","dimo123456","chenmo");
// 检测连接
if (mysqli_connect_errno())
{
    echo "连接失败: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM login
WHERE name='{$na}'");

while($row = mysqli_fetch_array($result))
{
    $app = $row['password'];
    
    //echo $app;
   if ($app=="$pass")
   {
      echo '1';
   }
   else
   {
       echo "0";
   }

}
?>
<?php
$na=$_POST["name"];
$con=mysqli_connect("localhost","chenmo","dimo123456","chenmo");
if (mysqli_connect_errno())
{
	echo "连接失败: " . mysqli_connect_error();
}
$result = mysqli_query($con,"SELECT * FROM login
	WHERE name='{$na}'");
while($row = mysqli_fetch_array($result))
{
	$app = $row['password'];
	if ($app)
	{
		echo '1';
	}
}
?>
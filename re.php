<?php
$name = $_POST["userr"];
$password = $_POST["password"];
$email = $_POST["email"];
//mysql
$servername = "localhost";
$username = "chenmo";
$pass = "dimo123456";
$dbname = "chenmo";
$conn = new mysqli($servername, $username, $pass, $dbname);
if ($conn->connect_error) {
	die("Connect Failed: " . $conn->connect_error);
}
$sql = "insert into login (name,password, email)
values ('{$name}', '{$password}','{$email}')";
if ($conn->query($sql) === true) {
	echo "注册成功正在为您跳转中...";
echo "<script>window.location.href='index.html'</script>";
} else {
	echo"Error";
}

$conn->close();
?>
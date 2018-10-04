<?php
	$str = file_get_contents('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
	$array = json_decode($str);
	$imgurl = $array->{"images"}[0]->{"url"};
	if($imgurl){
		$pic = 'http://cn.bing.com'.$imgurl;
		echo $pic;
			exit();
	}else{
		exit('error');
	}
?>
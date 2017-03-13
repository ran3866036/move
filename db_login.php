<?php
	$host = 'bdm267988315.my3w.com';
	$database = 'bdm267988315_db';
	$username = 'bdm267988315';
	$password = '15681898535Ran';
	// $table = $_POST['table']

	 header('Access-Control-Allow-Origin:*');
	$connection = mysql_connect($host, $username, $password);//连接到数据库
	mysql_query("set names 'utf8'");//编码转化
	if (!$connection) {
	  die("could not connect to the database.\n" . mysql_error());//诊断连接错误
	}
	$selectedDb = mysql_select_db($database);//选择数据库
	if (!$selectedDb) {
	  die("could not to the database\n" . mysql_error());
	}
	
	$query = "select * from react_move";//构建查询语句
	$result = mysql_query($query);//执行查询
	$arr = Array();
	if (!$result) {
	  die("could not to the database\n" . mysql_error());
	}
	while ($row = mysql_fetch_assoc($result)) {
	  //取出结果并显示
	array_push($arr, $row);
	}
	echo json_encode($arr);
?>
<?
$DBhost = "localhost";
$DBuser = "root";
$DBpass = "";
$DBName = "RedRibbon";
$table = "Services";
mysql_connect($DBhost,$DBuser,$DBpass) or die("Unable to connect to database");
@mysql_select_db("$DBName") or die("Unable to select
database $DBName");

$serviceName = $_POST["serviceName"];
$serviceType = $_POST["serviceType"];
$incomeRestriction = $_POST["incomeRestriction"];
$gender = $_POST["gender"];
$dependents = $_POST["dependents"];
$faith = $_POST["faith"];
$reqDocuments = $_POST["reqDocuments"];
$description = $_POST["description"];
$location = $_POST["location"];
$contact = $_POST["contact"];
$hours = $_POST["hours"];
$weblink = $_POST["weblink"];

$sqlquery = "SELECT count(*) as count FROM Services";
$result= mysql_query($sqlquery);
$count = mysql_result($result,0,"count");

$sqlquery = "INSERT INTO $table
VALUES($count + 1, '$serviceName', '$serviceType', '$incomeRestriction', 
	'$gender', '$dependents', '$faith', '$reqDocuments', '$description', 
	'$location', '$contact', '$hours', '$weblink')";


$result = mysql_query($sqlquery);

// $sqlquery = "SELECT * FROM Services";
// $result= mysql_query($sqlquery);


// $num = mysql_numrows($result);

// $i = 0;
// while($i < $num){
// 	echo "<b>WWWWWWWW ";

// 	$serviceName=mysql_result($result,$i,"serviceName");
// 	$serviceType=mysql_result($result,$i,"serviceType");
// 	$incomeRestriction=mysql_result($result,$i,"incomeRestriction");
// 	$gender=mysql_result($result,$i,"gender");
// 	$dependents=mysql_result($result,$i,"dependents");
// 	$faith=mysql_result($result,$i,"faith");
// 	$reqDocuments=mysql_result($result,$i,"reqDocuments");
// 	$description=mysql_result($result,$i,"description");
// 	$location=mysql_result($result,$i,"location");
// 	$contact=mysql_result($result,$i,"contact");
// 	$hours=mysql_result($result,$i,"hours");
// 	$weblink=mysql_result($result,$i,"weblink");

// 	echo "<b>$serviceName </b><br>$serviceType<br>$incomeRestriction<br>$gender<br>$dependents<br>$faith<br><<br>$reqDocuments<br><br>$description<br><br>$location<br><br>$contact<br><br>$hours<br><br>$weblink<br><hr><br>";

// 	$i++;
// }
mysql_close();
if($result){
	die(json_encode(array('error' => 0, 'message' => "Entry Successful"))) ;
} else{
	die(json_encode(array('error' => 1, 'message' => "Database Error"))) ;
}


?>
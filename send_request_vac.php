<?php
/*$sendto = "vvdom17@mail.ru, vash_v@list.ru, duplicate@mail.ru";*/
$sendto = "vv-recruiting@yandex.ru, sslonovboriss@yandex.ru, duplicate@mail.ru";
$name = nl2br($_REQUEST['name']);
$phone = nl2br($_REQUEST['phone']);
$cv = nl2br($_REQUEST['cv']);
$message = nl2br($_REQUEST['message']);
$vac = nl2br($_REQUEST['vac']);

$content = "Заявка с сайта Ваш Выбор Персонал";
// Формирование заголовка письма
$subject  = $content;
$headers  = "From: no-replay@no-replay.ru" . "\r\n";
$headers .= "Reply-To: Без ответа". "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'5>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Отправлена заявка с сайта Ваш Выбор Персонал</h2>\r\n";
$msg .= "<p><strong>Имя</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Ссылка на резюме:</strong> ".$cv."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
$msg .= "<p><strong>Вакансия:</strong> ".$vac."</p>\r\n";

$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>




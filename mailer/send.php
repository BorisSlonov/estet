<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';



// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];




// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'sslonovboriss@yandex.ru'; // Логин на почте
    $mail->Password   = 'hiadcgwmbegwskev'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->From = "info@estet-invisible.ru";
    $mail->FromName = "Estet сайт";

   // Получатель письма
   $mail->addAddress('sslonovborisss@gmail.com'); 

    

// Формирование самого письма
$title = "Заявка с сайта estet-invisible";
$body = "
<h2>Заявка на звонок</h2>
<b>Имя:</b> $name <br>
<b>Телефон:</b> $phone
";


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST["userName"];
    $userMail = $_POST["userMail"];
    $userPhone = $_POST["userPhone"];

    $to = "ash.it.corporation@gmail.com";

    $subject = "Нова заявка з сайту";

    $message = "Ім'я: $userName\n";
    $message .= "Пошта: $userMail\n";
    $message .= "Номер телефона: $userPhone\n";

    $headers = "From: $userMail\r\n";
    $headers .= "Reply-To: $userMail\r\n";

    mail($to, $subject, $message, $headers);
}
?>

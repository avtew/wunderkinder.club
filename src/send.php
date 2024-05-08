<?php
  $to = 'admin@wunderkinder.club';
  $subject = 'Письмо с сайта';
  $message = '
          <html>
              <head>
                  <title>'.$subject.'</title>
              </head>
              <body>
                  <p>Имя: '.$_POST['name'].'</p>
                  <p>Email: '.$_POST['email'].'</p>
                  <p>Сообщение: '.$_POST['text'].'</p>
              </body>
          </html>';
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  mail($to, $subject, $message, $headers);
  header('Location: index.html');
?>
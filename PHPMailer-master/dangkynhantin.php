<?php
     if(isset($_POST['btn']) == true){
          GuiMail();
     }

     function GuiMail(){   
    require "PHPMailer-master/src/PHPMailer.php"; 
    require "PHPMailer-master/src/SMTP.php"; 
    require 'PHPMailer-master/src/Exception.php'; 
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);//true:enables exceptions
    try {
        $mail->SMTPDebug = 0; //0,1,2: chế độ debug. khi chạy ngon thì chỉnh lại 0 nhé
        $mail->isSMTP();  
        $mail->CharSet  = "utf-8";
        $mail->Host = 'smtp.gmail.com';  //SMTP servers
        $mail->SMTPAuth = true; // Enable authentication
        $mail->Username = 'hoangngocthuy6@gmail.com'; // SMTP username
        $mail->Password = 'rqhgxjixqjryxudz';   // SMTP password
        $mail->SMTPSecure = 'ssl';  // encryption TLS/SSL 
        $mail->Port = 465;  // port to connect to                
        $mail->setFrom('hoangngocthuy6@gmail.com', 'CÔNG TY TNHH ELSUN' ); 
        $mail->addAddress('noithatelsun@gmail.com', 'CÔNG TY TNHH ELSUN'); //mail và tên người nhận  
        $mail->isHTML(true);  // Set email format to HTML
        $mail->Subject = 'ĐĂNG KÝ NHẬN TIN/ THÔNG TIN LIÊN HỆ';
        $noidungthu = file_get_contents("./PHPMailer-master/noidungthudangky.txt");
          $noidungthu = str_replace(
                         [ '{email}'], 
                         [$_POST['email']]
                         , $noidungthu);
        $mail->Body = nl2br($noidungthu);
        $mail->smtpConnect( array(
            "ssl" => array(
                "verify_peer" => false,
                "verify_peer_name" => false,
                "allow_self_signed" => true
            )
        ));
        $mail->send();
        //echo 'Đã gửi thông tin liên hệ, chúng tôi sẽ liên hệ với bạn sớm nhất!! Cám ơn nha con vợ';
        // header("location:lienhe_guimailxong.php");
    } catch (Exception $e) {
        echo 'Mail không gửi được. Lỗi: ', $mail->ErrorInfo;
    }
 }//function GuiMail
?>
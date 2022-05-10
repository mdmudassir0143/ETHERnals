<?php

if(isset($_POST['submit']))
{
    $to = "luckykgn2@gmail.com";
    $name = $_POST['Fname'];
    $Lname = $_POST['Lname'];
    $email= $_POST['email'];
    $website= $_POST['website'];
    $about= $_POST['about'];
    $subject = "Mail From website";
    $headers = "From: noreply@yoursite.com" . "\r\n" ."CC: somebodyelse@example.com";
    if(mail($to,$subject,$txt,$headers))
    {
        echo "Mail Sent!";
    }
    else
    {
        echo "Failed to send mail";
    }
}
?>
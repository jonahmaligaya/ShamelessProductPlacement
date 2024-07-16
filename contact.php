<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST["contact_form_first_name"];
        $last_name = $_POST["contact_form_last_name"];
        $email = $_POST["contact_form_email"];
        $company = $_POST["contact_form_company"];
        $message = $_POST["contact_form_message"];

        echo "Name: " . $first_name . " " . $last_name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Company: " . $company . "<br>";
        echo "Message: " . $message . "<br>";

        mail("info@shamelesspp.com", "Application", $message, "From:" . $email);
    }
?>
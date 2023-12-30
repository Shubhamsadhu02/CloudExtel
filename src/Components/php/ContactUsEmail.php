<?php
header('Content-Type: application/json');

$requestPayload = json_decode(file_get_contents('php://input'), true);

// Getting data
$fname = $requestPayload['fullName']; 
$cmail = $requestPayload['email']; 
$contactNo = $requestPayload['contactNo'];
$subject = $requestPayload['subject'];
$message = $requestPayload['message'];

// Email body Customer will receive
$message1 = "Dear " . $fname . ",\n\n"
  . "Thank you for using services." . "\n"
  . "You submitted the following information:" . "\n"
  . "Full Name: " . $fname . "\n"
  . "Email: " . $cmail . "\n"
  . "Phone Number: " . $contactNo . "\n"
  . "Message: " . $message . "\n\n\n"
  . "This e-mail was sent from a contact form on CloudExtel site (http://cloudextel.com)" . "\n"
  . "Note: This is a system-generated email. Please don't reply to this email." . "\n\n"
  . "Thanks & Regards" . "\n"
  . "Cloud Extel";

$message2 = $fname . "has submitted following information." . "\n"
  . "Full Name: " . $fname . "\n"
  . "Email: " . $cmail . "\n"
  . "Phone Number: " . $contactNo . "\n"
  . "Message: " . $message . "\n\n\n"
  . "Note: This is a system-generated email. Please don't reply to this email.";

// Email headers
$headers = "From: " . "info@cloudextel.sdaemon.com"; // Vendor Email
$headers .= "MIME-Version: Client Extel\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mail = "info@cloudextel.sdaemon.com"; // Vendor Email
// PHP mailer function
$result1 = mail($cmail, $subject, $message1, $headers); // This email sent to client address
$result2 = mail($mail, $subject, $message2, $headers);

// Checking if mails sent successfully
if ($result1 && $result2) {
  $response = array(
    'success' => true,
    'message' => 'Email sent successfully.'            
  );
} else {
  $response = array(
    'success' => false,
    'message' => 'Failed to send the email.'
  );
}

echo json_encode($response);

?>

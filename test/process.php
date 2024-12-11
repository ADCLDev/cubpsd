<?php
// Process the form data
$name = $_POST['name'];
$address = $_POST['address'];
$phone = $_POST['phone'];

// Handle file uploads
$pictureFile = $_FILES['picture'];
$cvFile = $_FILES['cv'];

// Create the uploads/ directory if it doesn't exist
if (!is_dir('uploads/')) {
    mkdir('uploads/', 0755, true);
}

// Move the uploaded files to the uploads/ directory
$pictureDestination = 'uploads/' . $pictureFile['name'];
$cvDestination = 'uploads/' . $cvFile['name'];

move_uploaded_file($pictureFile['tmp_name'], $pictureDestination);
move_uploaded_file($cvFile['tmp_name'], $cvDestination);

// Redirect to the display page with the submitted data
header('Location: display.php?name=' . urlencode($name) . '&address=' . urlencode($address) . '&phone=' . urlencode($phone) . '&picture=' . urlencode($pictureDestination) . '&cv=' . urlencode($cvDestination));
exit();
?>
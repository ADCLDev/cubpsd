<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Details</title>
    <style>
        /* CSS styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .details-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        p {
            margin-bottom: 20px;
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
        }

        a {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
        }

        a:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
<div class="details-container">
        <h1>Application Details</h1>
        <?php
        // Get the submitted data from the query string
        $name = urldecode($_GET['name']);
        $address = urldecode($_GET['address']);
        $phone = urldecode($_GET['phone']);
        $pictureFile = urldecode($_GET['picture']);
        $cvFile = urldecode($_GET['cv']);
        ?>

        <p><strong>Name:</strong> <?php echo $name; ?></p>
        <p><strong>Address:</strong> <?php echo $address; ?></p>
        <p><strong>Phone Number:</strong> <?php echo $phone; ?></p>
        <img src="<?php echo $pictureFile; ?>" alt="Picture">
        <a href="<?php echo $cvFile; ?>" target="_blank">View CV</a>
    </div>
</body>
</html>
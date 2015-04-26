<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
<?php foreach ( glob('*.js') as $filename ) {
	echo '<script src="' . $filename . '">' . $filename . '</script>';
} ?>
</body>
</html>
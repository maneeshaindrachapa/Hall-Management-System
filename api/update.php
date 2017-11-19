<?php
include "Crud.php";
$crud= new Crud();

$updateData=json_decode(file_get_contents("php://input"));

$query="UPDATE user SET firstname='$updateData->firstname', lastname='$updateData->lastname', password='$updateData->password' WHERE indexno='$updateData->indexno'";
$crud->execute($query);

echo json_encode("success");

?>
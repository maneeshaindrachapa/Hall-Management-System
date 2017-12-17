<?php
include "Crud.php";
$crud= new Crud();

$payment=json_decode(file_get_contents("php://input"));
if(sizeof($payment)!=0){
    //print_r(($logindata));
    $query="INSERT INTO payment(student_id,price) VALUES('$payment->indexno','$payment->price')";

    $data=$crud->execute($query);
    echo json_encode($data);
}

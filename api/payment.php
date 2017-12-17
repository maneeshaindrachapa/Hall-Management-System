<?php
include "Crud.php";
$crud= new Crud();

$payment=json_decode(file_get_contents("php://input"));
if(sizeof($payment)!=0){
    //start transaction
    $query3="start transaction";
    $data3=$crud->execute($query3);

    //payment done
    $query="INSERT INTO payment(student_id,price) VALUES('$payment->indexno','$payment->price')";
    $data=$crud->execute($query);

    //get student due price
    $query1="SELECT due_price from student where indexno='$payment->indexno'";
    $data1=$crud->getData($query1);

    $due_price=$data1[0]['due_price'];
    $due_price=$due_price-$payment->price;

    //update student due price
    $query2="UPDATE student set due_price='$due_price' where indexno='$payment->indexno'";
    $data2=$crud->execute($query2);

    //end transaction
    $query4="commit";
    $data4=$crud->execute($query4);

    echo json_encode($data4);
}

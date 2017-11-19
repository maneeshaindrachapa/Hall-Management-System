<?php
    include "Crud.php";
    $crud= new Crud();

    $login_data=json_decode(file_get_contents("php://input"));

    $query="SELECT * From user natural join student where indexno='$login_data->indexNo'";

    $data=$crud->getData($query);
    
    echo json_encode($data[0]);
?>
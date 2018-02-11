<?php
    include "Crud.php";
    $crud= new Crud();

    $login_data=json_decode(file_get_contents("php://input"));
    if(sizeOf($login_data)!=0){
        $query="SELECT firstname,lastname,password,position,salary,hall_name,hours_per_week From user natural join employee natural join employeeassign natural join hall where indexno='$login_data->indexNo'";
        $data=$crud->getData($query);
        echo json_encode($data[0]);
    }
?>
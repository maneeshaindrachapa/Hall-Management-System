<?php
    include "Crud.php";
    $crud= new Crud();

    $login_data=json_decode(file_get_contents("php://input"));
    if(sizeOf($login_data->indexNo)!=0){
        $query="SELECT * From user natural join student natural join hall where indexno='$login_data->indexNo'";

        $data=$crud->getData($query);
        
        echo json_encode($data[0]);
    }
?>
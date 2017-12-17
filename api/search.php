<?php
    include "Crud.php";
    $crud= new Crud();
    
    $search=json_decode(file_get_contents("php://input"));
    if(sizeof($search)!=0){
        $errors="";

        $hall_type=$search->hall_type;
        $price=$search->price;
        
        $query="SELECT * FROM hall natural join room where free_beds>0 and monthly_fee<'$price' and hall_type='$hall_type'";
        $data=$crud->getData($query);
        echo json_encode($data);
    }
?>
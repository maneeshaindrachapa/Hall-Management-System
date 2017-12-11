<?php
    include "Crud.php";
    $crud= new Crud();
    
    $query="SELECT * from hall natural join room";
    $data=$crud->getData($query);      
    echo json_encode($data);

?>
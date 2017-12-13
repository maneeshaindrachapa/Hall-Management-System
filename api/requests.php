<?php
    include "Crud.php";
    $crud= new Crud();
    
    $query="SELECT * from request natural join student natural join hall natural join room";
    $data=$crud->getData($query);
      
    echo json_encode($data);

?>
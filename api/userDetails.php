<?php
    include "Crud.php";
    $crud= new Crud();
    
    $query="Select  * from student natural join hall natural join room where room_id=room_no";
    $data=$crud->getData($query);
      
    echo json_encode($data);

?>
<?php
    include "Crud.php";
    $crud= new Crud();
    
    $req_data=json_decode(file_get_contents("php://input"));
    if(sizeof($req_data)!=0){
        $req_id=$req_data->req_id;

        //delete the request
        $query="DELETE FROM request WHERE req_id='$req_id'";
        $data=$crud->execute($query);

        echo json_encode($data);
    }

?>
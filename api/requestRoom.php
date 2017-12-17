<?php
    include "Crud.php";
    $crud= new Crud();
    
    $request=json_decode(file_get_contents("php://input"));
    if(sizeof($request)!=0){
        $errors="";

        $index_no=$request->indexno;
        $hall_id=$request->hall_id;
        $room_no=$request->room_no;
        
        $query="INSERT INTO request(indexno,hall_id,room_no) values ('$index_no','$hall_id','$room_no')";
        $data=$crud->execute($query);        
        echo json_encode("Requested");
    }

?>
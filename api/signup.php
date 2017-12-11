<?php
include "Crud.php";
$crud= new Crud();

$logindata=json_decode(file_get_contents("php://input"));
$type="";
if(sizeof($logindata)!=0){
    if($logindata->type=="1"){
        $type="Admin";
    }else if($logindata->type=="3"){
        $type="Student";
    }else{
        $type="Employee";
    }

    //print_r(($logindata));
    $query="INSERT INTO user(indexno,firstname,lastname,password,type) VALUES('$logindata->indexno','$logindata->firstname','$logindata->lastname','$logindata->password','$type')";

    $data=$crud->execute($query);
    echo json_encode($data);
}



?>
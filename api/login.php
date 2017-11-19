<?php
    include "Crud.php";
    $crud= new Crud();
    
    $logindata=json_decode(file_get_contents("php://input"));
    if(sizeof($logindata)!=0){
        $errors="";

        $index_no=$logindata->index_signin;
        $password=$logindata->password_signin;
        
        $query="SELECT indexno,password,type FROM login where indexno='$logindata->index_signin'";
        $data=$crud->getData($query);
        if($data[0]["password"]==$password){        
            echo json_encode($data[0]);
        }
    }

?>
<?php
include "Crud.php";
$crud= new Crud();

$logindata=json_decode(file_get_contents("php://input"));
$type=$dept="";
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

    if($logindata->type=="1"){
        $type="Admin";
        $query1="INSERT INTO administrator(indexno,salary) VALUES('$logindata->indexno','$logindata->salary')";
        $data1=$crud->execute($query1);
    }else if($logindata->type=="3"){
        $type="Student";
        if($logindata->department="1"){
            $dept="CSE";
        }else if($logindata->deparment="2"){
            $dept="Electronic";
        }else if($logindata->deparment="3"){
            $dept="Electrical";
        }
        $query2="INSERT INTO student(indexno,dept_name) VALUES('$logindata->indexno','$dept')";
        $data2=$crud->execute($query2);
    }else{
        $type="Employee";
    }

    echo json_encode($data);
}



?>
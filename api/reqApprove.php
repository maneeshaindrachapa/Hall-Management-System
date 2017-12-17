<?php
    include "Crud.php";
    $crud= new Crud();
    
    $req_data=json_decode(file_get_contents("php://input"));
    if(sizeof($req_data)!=0){
        $req_id=$req_data->req_id;
        $hall_id=$req_data->hall_id;
        $room_no=$req_data->room_no;
        $free_beds=$req_data->free_beds;
        $indexno=$req_data->indexno;
        if($free_beds>0){
            $free_beds--;
        }else{
            echo json_encode(false);
        }
        //start transction
        $query6="Start transaction";
        $data6=$crud->execute($query6);

        //increase users previous room freebed count in one
        $query4="Select  * from student natural join hall natural join room where indexno='$indexno' and room_id=room_no";
        $data4=$crud->getData($query4);
        $previous_hall_id=$data4[0]['hall_id'];
        $previous_room_no=$data4[0]['room_no'];
        $free_beds_increased=$data4[0]['free_beds'];
        $monthly_fee=$data4[0]['monthly_fee'];
        $due_price=$data4[0]['due_price'];
        $due_price+=$monthly_fee;
        $free_beds_increased++;

        $query5="UPDATE hall natural join room SET free_beds='$free_beds_increased' WHERE hall_id='$previous_hall_id' and room_no='$previous_room_no'";
        $data5=$crud->execute($query5);

        //set room free beds 
        $query1="UPDATE hall natural join room SET free_beds='$free_beds' WHERE hall_id='$hall_id' and room_no='$room_no'";
        $data1=$crud->execute($query1);

        //assign user to a room
        $query2="UPDATE student set hall_id='$hall_id',room_id='$room_no',due_price='$due_price' where indexno='$indexno'";
        $data2=$crud->execute($query2);

        //delete the request
        $query3="DELETE FROM request WHERE req_id='$req_id'";
        $data3=$crud->execute($query3);

        //end transaction
        $query7="commit";
        $data7=$crud->execute($query7);

        echo json_encode($data7);
    }

?>
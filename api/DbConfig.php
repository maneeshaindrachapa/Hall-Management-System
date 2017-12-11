<?php
class DbConfig{
    
    private $_host='localhost'; //host name
    private $_username='root'; //username for the database
    private $_password='';  //password for the database
    private $_database='sumanadasadb'; //database name

    protected $connection;
    public function __construct(){
        if(!isset($this->connection)){
            $this->connection=new mysqli($this->_host,$this->_username,$this->_password,$this->_database);
            
            if(!$this->connection){
                echo "Cannot connect to the database Server";
                exit;
            }
        }
        return $this->connection;
    }
}
    

?>
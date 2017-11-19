<?php
class DbConfig{
    
    private $_host='localhost';
    private $_username='root';
    private $_password='';
    private $_database='sumanadasadb';

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
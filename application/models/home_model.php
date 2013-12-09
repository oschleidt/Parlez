<?php

class Home_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
    }


    function test()
    {
        $this->load->view('home');
    }

}

?>
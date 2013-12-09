<?php

class Login_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
		$this->load->database();
    }
	
	function check_login() {		
		$this->db->where('email', $this->input->post('email'));
		$this->db->where('password', $this->input->post('password'));
		$query = $this->db->get('users');
		
		if ( $query->num_rows() == 1 ) {
			return true;
		}
		else {
			return false;
		}
	}
	

}

?>
<?php

class Register_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
		$this->load->database();
    }
	
	function register($email, $password, $username) {
		
		$errcode = 0;
		
		
		$query = $this->db->get_where(
			'users', array(
				'email' => $email
			)
		);
		
		
		if($query->num_rows() > 0) {
			$errcode = 1;
		}
		
		
		if ( $errcode == 0 ) {
		$data = array(
			'email' => $email,
			'password' => $password,
			'username' => $username
		);

		$this->db->insert('users', $data);
	}
	return $errcode;
	}

}

?>
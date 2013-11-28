<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Hello_world extends CI_Controller {

	public function index()
	{
        $this->load->library('email');

		$this->load->view('hello_world');


        $this->email->from('your@example.com', 'Your Name');
        $this->email->to('oliverschleidt@gmail.com');

        $this->email->subject('Email Test');
        $this->email->message('Testing the email class.');

        $this->email->send();
	}
}
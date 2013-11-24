<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Hello_world extends CI_Controller {

	public function index()
	{
		$this->load->view('hello_world');
	}
}
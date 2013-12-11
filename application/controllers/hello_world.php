<?php
class Hello_world extends CI_Controller {

    //var $test = $_ENV["HOSTNAME"];
    //var $test = "test";

	public function index()
	{
		/*echo 'Hello World!';
		$this->load->view('welcome_message');
		$this->load->database();
		$query = $this->db->query('SELECT * FROM users');

		foreach ($query->result() as $row)
		{
		   echo $row->username;
		   //echo $row->name;
		   //echo $row->body;
		}*/

        //$this->load->library('javascript');
        //$this->javascript->external();
        //$this->javascript->compile();
        //$data['library_src'] = $this->javascript->script();
        //$data['script_head'] = $this->javascript->_compile();
		//$data['title'] = "Parlez";
		//$this->load->view('home', $data);
		//$this->load->view('head', $data);
        //$this->load->model('home_model');
        //$this->home_model->test();





        //$this->load->library('jquery');

        //$this->javascript->hide(".wrapper");

        //$this->javascript->click("#registerform", "hide('#registerform');");

        //echo $this->test;

        //echo $_SERVER['APACHE_RUN_DIR'];
		
		//phpinfo(); 

        //echo getenv("SENDGRID_USERNAME");
		
		//echo $_ENV['SENDGRID_USERNAME'];
		
		//echo $_ENV['SENDGRID_PASSWORD'];

        $this->load->library('session');

        $this->load->model('news_model');


        $data['title'] = "Parlez";
        $data['meta'] = "meta";
        $data['header'] = "header";
        $data['news_title'] = $this->news_model->get_title(1);
        $data['news_link'] = $this->news_model->get_link(1);
        $data['news_content'] = $this->news_model->get_content(1);
        $data['news_count'] = $this->news_model->get_count();
        //$data['menu'] = "menu";
        $data['left_page'] = "news";
		
		
        if (!isset($this->session->userdata['loggedin'])) {
            $data['right_page'] = "registerform";
        }
        else {
        	$data['right_page'] = "optionform";
        }
		
        if (!isset($this->session->userdata['loggedin'])) {
            $data['banner'] = "banner";
        }
        else {
            $data['banner'] = "loggedin";
        }
        //$data['banner'] = "banner";
        $data['footer'] = "footer";
        $this->load->view('container', $data);



	}
	
	public function test()
	{
		$this->load->view('welcome_message');
	}
	
	public function login() {
		$this->load->model('login_model');
		$query = $this->login_model->check_login();
		
		
		if($query) {
			$data = array(
				'username' => $this->input->post('email'),
				'loggedin' => true
			);
			
			$this->session->set_userdata($data);
			echo 0;
		}
		else {
			echo 1;
		}
	}

    public function update_newsform() {
        $this->load->model('news_model');
        $id = $this->input->post('id');
        echo $this->news_model->get_title($id).'|'.$this->news_model->get_content($id);
    }
	
	public function logout() {
		$this->load->model('news_model');
		
        $data['title'] = "Parlez";
        $data['meta'] = "meta";
        $data['header'] = "header";
        $data['news_title'] = $this->news_model->get_title(1);
        $data['news_link'] = $this->news_model->get_link(1);
        $data['news_content'] = $this->news_model->get_content(1);
        $data['news_count'] = $this->news_model->get_count();
        $data['left_page'] = "news";
		$data['right_page'] = "logout";
		$data['footer'] = "footer";
		$data['banner'] = "loggedin";
		$this->load->view('container', $data);
	}
	
	public function sendmail() {
        $config = Array(
            'protocol' => 'smtp',
            'smtp_host' => 'smtp.sendgrid.net',
            'smtp_port' => 587,
            'smtp_user' => $_ENV['SENDGRID_USERNAME'],
            'smtp_pass' => $_ENV['SENDGRID_PASSWORD'], );


        $this->load->library('email', $config);


        $this->email->from('your@example.com', 'Your Name');
        $this->email->to($this->input->post('email'));

        $this->email->subject('Email Test');
        $this->email->message('Testing the email class.');

        //echo getenv("SENDGRID_PASSWORD");
		
		$this->form_validation->set_rules('email', 'Email', 'required|valid_emails');
		//$this->form_validation->set_rules('message', 'Message', 'required|min_length[5]');
		
		//$this->form_validation->set_rules('email', 'Email', '');
		//$this->form_validation->set_rules('message', 'Message', '');

		
		if ($this->form_validation->run() == FALSE)
		{
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode(array(
				/*"message_error" => form_error('message'),*/
				"email_error" => form_error('email')				
			)));
			//$this->load->view('error');
			//echo validation_errors();
			//$this->index();
			//$this->load->view('dialog');
		}
		else
		{
			return false;
	        /*if($this->email->send())
	        {
	            return false;
	        }
	        else
	        {
	            show_error($this->email->print_debugger());
	        }*/
		}
	}
	
	public function dialog() {
		$this->load->view('dialog');
	}
	
	public function register() {
		$this->load->model('register_model');
		
		return $this->register_model->register($this->input->post('email'), $this->input->post('password'), $this->input->post('name'));
	}
}
?>
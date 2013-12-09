<?php

class News_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }


    function get_count()
    {
        $query = $this->db->query('SELECT * FROM news');

        return $query->num_rows();
    }

    function get_link($id)
    {
        $query = $this->db->query("SELECT * FROM news WHERE id = '{$id}'");
        $row = $query->row();
        return $row->link;
    }

    function get_title($id)
    {
        $query = $this->db->query("SELECT * FROM news WHERE id = '{$id}'");
        $row = $query->row();
        return $row->title;
    }

    function get_content($id)
    {
        $query = $this->db->query("SELECT * FROM news WHERE id = '{$id}'");
        $row = $query->row();
        return $row->content;
    }


}


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>

    <head>


        <?php $this->load->view($meta); ?>

        <title><?php echo $title; ?></title>

    </head>

    <body>

    <?php
    $this->load->view($header);
    //$this->load->view($menu);
    $this->load->view($left_page);
    $this->load->view($right_page);
    $this->load->view('dialog');
    $this->load->view($footer);
    $this->load->view($banner);
    ?>

    </body>
</html>
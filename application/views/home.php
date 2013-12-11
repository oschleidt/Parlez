<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="<?php echo asset_url(); ?>css/style.css"/>
		<script type="text/javascript" src="<?php echo asset_url();?>js/jquery.js"></script>
		<script type="text/javascript" src="<?php echo asset_url(); ?>js/jQueryRotateCompressed.js"></script>
		<script type="text/javascript" src="<?php echo asset_url();?>js/index.js"></script>
        <?php echo $library_src;?>
        <?php echo $script_foot;?>
		<title><?php echo $title; ?></title>
	</head>

	<body>
		<div id="back"></div>
		<div class="layout">

				
			<div id="content">


<div class="wrapper">

		<div id="newsform">
		<div id="newsinner">
						<a 
				 
			>
				<div id="newstitle"> 
					Lukas Kohler mag Brot				</div> 
			</a>
			<div id="newsimage"> </div>
			<div id="newstrenner_1"> </div>
			<div id="newscontent"> 
				Karlsruhe, 04.11.2013 - Lukas Kohler isst gerne Brot und steht dazu, Beh&ouml;rden diskutieren noch wie dies geahndet werden wird. 			</div>
			<div id="newstrenner_2"> </div>
			<div id="newsnav"> 
				<div class="" id="newsArrowLeft"> </div>
				<div class="newsnumber" id="newsnumber_active">1</div><div class="newsnumber" id="newsnumber_2">2</div><div class="newsnumber" id="newsnumber_3">3</div>				<div class="" id="newsArrowRight"> </div>
			</div>
		</div>
	</div>
		<div id="registerform">
		<div id="reg_header"> Kostenlos registrieren um den Chat zu nutzen </div>
		<input type="text" id="reg_name" class="reg_field_inner" value="Name eingeben (max. 16 Zeichen)" tabindex="4">
			<div id="reg_name_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

		<input type="text" id="reg_email" class="reg_field_inner" value="E-Mail Adresse eingeben" tabindex="5">
			<div id="reg_email_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

		<input type="text" id="reg_emailver" class="reg_field_inner" value="E-Mail Adresse best&auml;tigen" tabindex="6">
			<div id="reg_emailver_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

		<input type="text" id="reg_password" class="reg_field_inner" value="Passwort eingeben (min. 6 Zeichen)" onfocus="$(this).attr('type','password');" tabindex="7">
			<div id="reg_password_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

		<input type="text" id="reg_passwordver" class="reg_field_inner" value="Passwort best&auml;tigen" onfocus="$(this).attr('type','password');" tabindex="8">
			<div id="reg_passwordver_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

		<input type="button" id="reg_submit" value="Registrieren" tabindex="9">
	</div></div>
			</div>

		</div>

		
<div id="banner">
	<div class="wrapper">
		<a href="index.php" id="title">Parlez</a><br/>
		<a href="index.php" id="subtitle"> - get connected</a>
		<div id="menu">

			<span id="searchButton"> Suchen <div id="searchArrow" class="menuimg"> </div> </span> 

			
					<input type="text" id="login_email" value="E-Mail" tabindex="1">
					<img src="<?php echo asset_url();?>img/error_x.png" class="wrong_login" id="wrong_email"/>

					<input type="text" id="login_password" value="Passwort" tabindex="2" onfocus="$(this).attr('type','password');" >
					<img src="<?php echo asset_url();?>img/error_x.png" class="wrong_login" id="wrong_password"/>

					<input type="button" id="login" value="&nbsp;Login&nbsp;" tabindex="3">


					</div>	
	</div>
</div>
<div id="searchbar"> <input type="text" id="searchInput" value="Max Mustermann"/> <img src="<?php echo asset_url();?>img/lupe.png" id="searchLupe" alt="Lupe"/>
</div>
</body>
</html>
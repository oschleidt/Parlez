<div id="registerform">
    <div id="reg_header"> Kostenlos registrieren um den Chat zu nutzen </div>
	
	<?php echo form_input(array(
		'id' => 'reg_name',
		'class' => 'reg_field_inner',
		'name' => 'reg_name',
		'placeholder' => 'Name eingeben (max. 16 Zeichen)',
		'tabindex' => 4
	)); ?>
	<div id="reg_name_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>
	
	<?php echo form_input(array(
		'id' => 'reg_email',
		'class' => 'reg_field_inner',
		'name' => 'reg_email',
		'placeholder' => 'E-Mail Adresse eingeben',
		'tabindex' => 5
	)); ?>
	<div id="reg_email_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>
	
	<?php echo form_input(array(
		'id' => 'reg_emailver',
		'class' => 'reg_field_inner',
		'name' => 'reg_emailver',
		'placeholder' => 'E-Mail Adresse best&auml;tigen',
		'tabindex' => 6
	)); ?>
	<div id="reg_emailver_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>
	
	<?php echo form_password(array(
		'id' => 'reg_password',
		'class' => 'reg_field_inner',
		'name' => 'reg_password',
		'placeholder' => 'Passwort eingeben (min. 6 Zeichen)',
		'tabindex' => 7
	)); ?>
	<div id="reg_password_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>
	
	<?php echo form_password(array(
		'id' => 'reg_passwordver',
		'class' => 'reg_field_inner',
		'name' => 'reg_passwordver',
		'placeholder' => 'Passwort best&auml;tigen',
		'tabindex' => 8
	)); ?>
	<div id="reg_passwordver_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>
	
	<?php echo form_submit(array(
		'id' => 'reg_submit',
		'name' => 'reg_submit',
		'value' => 'Registrieren',
		'tabindex' => 9
	)); ?>
<!--	
    <input type="text" id="reg_name" class="reg_field_inner" placeholder="Name eingeben (max. 16 Zeichen)" tabindex="4">
    <div id="reg_name_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

    <input type="text" id="reg_email" class="reg_field_inner" placeholder="E-Mail Adresse eingeben" tabindex="5">
    <div id="reg_email_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

    <input type="text" id="reg_emailver" class="reg_field_inner" placeholder="E-Mail Adresse best&auml;tigen" value="" tabindex="6">
    <div id="reg_emailver_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

    <input type="text" id="reg_password" class="reg_field_inner" placeholder="Passwort eingeben (min. 6 Zeichen)" onfocus="$(this).attr('type','password');" tabindex="7">
    <div id="reg_password_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

    <input type="text" id="reg_passwordver" class="reg_field_inner" placeholder="Passwort best&auml;tigen" onfocus="$(this).attr('type','password');" tabindex="8">
    <div id="reg_passwordver_err" class="failclass" style="position: absolute; margin-left: 40px;"> Bitte ausf&uuml;llen </div>

    <input type="button" id="reg_submit" value="Registrieren" tabindex="9">-->
</div>

<div id="dialog" class="modal" title="Dialog Title">
	<div class="modal-dialog">
	<div id="dialog-content">
		<div id="invite-success">
			<h2>Invitation successfully</h2>
		</div>
	<div id="dialog-form">
		<div id="dialog-title">
			<h2>Invite friends</h2>
		</div>
		<div id="dialog-body">
			<?php if (form_error('email')) {
				$error = array(
					'name' => 'email',
					'placeholder' => 'Enter Email Addresses',
					'class' => 'email-input error'
				);
			}
			else {
				$error = array(
					'name' => 'email',
					'placeholder' => 'Enter Email Addresses',
					'class' => 'email-input input'
				);
			}
			$test = array(
				'name' => 'message',
				'placeholder' => 'Enter a Message',
				'class' => 'message-input input'
			);
			?>
			<?php 
				echo form_open('hello_world/sendmail');
				/*echo form_input(array(
					'name' => 'email',
					'placeholder' => 'Enter Email Addresses',
					'class' => 'email-input'
				));*/				
				echo form_input($error);
				echo '<div class="a error"></div>';
				
				/*echo form_input(array(
									'name' => 'test',
									'placeholder' => 'test',
									'class' => 'input'
								));*/
					echo form_input($test);
					echo '<div class="b error"></div>';
			?>
			<!--<input class="email-input" type="text" name="email" value="" placeholder="Enter Email Addresses" />-->
		</div>
		<div id="dialog-footer">
			<?php
				echo form_submit(array(
					'name' => 'submit',
					'value' => 'Submit',
					'id' => 'invite',
					'class' => 'btn-close'
				));
			?>
			<!--<input type="button" class="btn-close" value="Submit" tabindex="9">
			<input type="button" id="dialog-close" class="btn" value="Cancel" tabindex="9">
			<button type="button" class="btn-close">Submit</button>-->
			<button type="button" id="dialog-close" class="btn">Cancel</button>
			<div id="error"></div>
		</div>
	</div>
</div>
</div>
</div>
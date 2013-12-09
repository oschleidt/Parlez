var searchbar = false;
var arrow = false;
var id = 1;
var oldid;
var reg_input = new Array("reg_name", "reg_email", "reg_emailver", "reg_password", "reg_passwordver", "login_username", "login_password" , "searchInput");

String.prototype.replaceUmlaute = function() {
	return this.replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue');
}



function check_special(input)
{
    var only_this="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?+-_.@";
    for (var i=0;i<input.length;i++)
    {
        if (only_this.indexOf(input.charAt(i))<0)
        {
            return false;
        }
    }
    return true;
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function testAnim() {
	$('#dialog-content').toggleClass('flipOutX animated').one('webkitAnimationEnd oAnimationEnd', function() {
		$("#dialog-form").css({
			'display' : 'none'
		});
		$("#invite-success").css({
			'display' : 'block'
		});
		$(this).toggleClass('flipOutX animated').toggleClass('flipInX animated').one('webkitAnimationEnd oAnimationEnd', function() {
			$(this).toggleClass('flipInX animated').delay(2000).queue(function() {
				$(this).toggleClass('flipOutX animated').one('webkitAnimationEnd oAnimationEnd', function() {
		   			$("#overlay").fadeOut(300, function() {
						$('#dialog-content').toggleClass('flipOutX animated')
		   				$(this).remove();
						$("#dialog-form").css({
							'display' : 'block'
						});
						$("#invite-success").css({
							'display' : 'none'
						});
						$("#dialog").css({
							'display' : 'none'
						});
						$(".error").html("");
						$('.input').val("");
						$('.a').fadeTo("slow", 0);
						$('.b').fadeTo("slow", 0);
		   			});
				}).dequeue();
		   });
			//.toggleClass('flipOutX animated');
		});
	});
}


function blah() {
	window.setTimeout(function() {
		window.location.replace("/Test");
	}, 4000);
	
	
	
	var node = document.getElementById('overlay');
	$("#dialog").css({'-webkit-animation' : 'dialog_fade_out 0.5s'});
  $("#dialog").fadeOut(500, function() {
	  $("#overlay").fadeOut(300, function() {
		  node.remove();
		  $(".error").html("");
		  $('.input').val("");
		  $('.a').fadeTo("slow", 0);
		  $('.b').fadeTo("slow", 0);
	  });
  });
	
}


window.onload = function() {
	
	//$( "#dialog" ).dialog({ autoOpen: false });
	//$("#dialog").dialog("open");
	
	$( "#option_invite_friends" ).click(function() {
		insertBefore();
	});
	
	$( "#dialog-close" ).click(function() {
		closeDialog();
	});
	
	$( "#invite" ).click(function() {
		validatInvite();
		return false;
	});

	/*$( "#dialog" ).dialog({
	  modal: true,
	  autoOpen: false,
	  appendTo: "body",
	  hide: { effect: "slideUp", duration: 1000 },
	  show: { effect: "explode", duration: 1000 }
	});*/
	

	/*####################
		Suchfunktion
	####################*/

	$("#searchButton").click(function() {
		if ( searchbar )
		{
			$( "#searchbar" ).css({'visibility':'hidden' , 'top' : '50px' , 'animation' : 'searchbar_move_up 0.5s' , '-webkit-animation' : 'searchbar_move_up 0.5s'});
		
			$( "#searchArrow" ).rotate({angle: 180, animateTo:0});
			searchbar = false;
		}
		else
		{ 
			$( "#searchInput").css({'color' : '#AAA'});
			$( "#searchInput").val('Max Mustermann');
			
			$( "#searchbar" ).css({'visibility':'visible' , 'top' : '90px' , 'animation' : 'searchbar_move_down 0.5s' , '-webkit-animation' : 'searchbar_move_down 0.5s'});

			$( "#searchArrow" ).rotate({angle: 0, animateTo:180});
			searchbar = true;
		}
	});

	$("#searchInput").focus(function() {
		if ( !reg_input[$(this).attr("id")] ) {
			$(this).css({'color' : '#000'});
			$(this).val('');
			reg_input[$(this).attr("id")] = true;
		} 
	});

	$("#searchInput").focusout(function() {
		if ( $("#searchInput").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$("#searchInput").val("Max Mustermann");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#searchInput").keypress(function ( event ) {
		if ( event.which == 13 ) {
			$("#searchLupe").click();
		}
	});

	$("#searchLupe").click(function() {
		document.location.href='/Test/?page=search&name='+$('#searchInput').val();
	});

	$(".searchName").click(function() {
		document.location.href='/Test/?page=profile&id='+$(this).attr('value');
	});

	/*####################
		Loginformular
	####################*/

	$("#login_email").focus(function() {
		if ( !reg_input[$(this).attr("id")] ) {
			$(this).css({'color' : '#000'});
			$(this).val('');
			reg_input[$(this).attr("id")] = true;
			$("#wrong_email").fadeOut("slow");
		} 
	});

	$("#login_password").focus(function() {
		if ( !reg_input[$(this).attr("id")] ) {
			$(this).css({'color' : '#000'});
			$(this).val('');
			reg_input[$(this).attr("id")] = true;
			$("#wrong_password").fadeOut("slow");
		} 
	});

	$("#login_email").focusout(function() {
		if ( $("#login_email").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$("#login_email").val("E-Mail");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#login_password").focusout(function() {
		if ( $("#login_password").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$(this).attr("type", "text");
			$("#login_password").val("Passwort");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#login").click(function() {
		login();
	});

	$("#login_email").keypress(function ( event ) {
		if ( event.which == 13 ) {
			login();
		}
	});

	$("#login_password").keypress(function ( event ) {
		if ( event.which == 13 ) {
			login();
		}
	});

	/*####################
	Registrierungsformular
	####################*/

	/*$(".reg_field_inner").focus(function() {
		if ( !reg_input[$(this).attr("id")] ) {
			$(this).css({'color' : '#000'});
			$(this).val('');
			reg_input[$(this).attr("id")] = true;
		} 
	});


	$(".reg_field_inner").keypress(function ( event ) {
		if ( event.which == 13 ) {
			reg_check();
		}
	});

	$("#reg_name").focusout(function() {
		if ( $("#reg_name").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$("#reg_name").val("Name eingeben");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#reg_email").focusout(function() {
		if ( $("#reg_email").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$("#reg_email").val("E-Mail Adresse eingeben");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#reg_emailver").focusout(function() {
		if ( $("#reg_emailver").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$(this).val("E-Mail Adresse bestätigen");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#reg_password").focusout(function() {
		if ( $("#reg_password").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$(this).attr("type", "text");
			$("#reg_password").val("Passwort eingeben (min. 6 Zeichen)");
			reg_input[$(this).attr("id")] = false;
		}
	});

	$("#reg_passwordver").focusout(function() {
		if ( $("#reg_passwordver").val() == "" ) {
			$(this).css({'color' : '#AAA'});
			$(this).attr("type", "text");
			$(this).val("Passwort bestätigen");
			reg_input[$(this).attr("id")] = false;
		}
	});*/

	$("#reg_submit_text").click(function() {
		reg_check();
	});

	$("#reg_submit").click(function() {
		reg_check();
	});

	/*####################
		Nachrichtenfenster
	####################*/

	$(".newsnumber").click(function() {
		changeNews(this.innerHTML);
	});

	$("#newsArrowLeft").click(function() {
		if ( id > 1 ) {
			oldid = id;
			id--;
			arrow = true;
			changeNews(-1);
		}
	});

	$("#newsArrowRight").click(function() {
		if ( id < document.getElementsByClassName("newsnumber").length ) {
			oldid = id;
			id++;
			arrow = true;
			changeNews(-1);
		}
	});





    //$( "#dialog" ).dialog({ autoOpen: false });
    //$( "#invite" ).click(function() {
    //    $( "#dialog" ).dialog( "open" );
    //    });


}

function login() {
	
	var email = $("#login_email").val()!="" ? $("#login_email").val() : "none";
	var password = $("#login_password").val()!="" ? $("#login_password").val() : "none";

	$.ajax({
			type: "POST",
			url: "index.php/hello_world/login",
			data: { email : email , password : password }
		})
		.done(function( data ) {
			alert(data);
			if ( data == 0 ) {
				document.location.href = '';
				//document.write("Hallo");
			} else if ( data == 1) {
				$("#wrong_email").fadeIn("slow");
			} else if ( data == 2 ) {
				$("#wrong_password").fadeIn("slow");
			}
			else {
				//document.write("Hallo");
			}
		})
		//return false;

}

function reg_check() {
	var valid = true;

	if ( $("#reg_name").val()=="Name eingeben" || $("#reg_name").val()=="")
	{ 
		document.getElementById("reg_name_err").innerHTML = "Bitte ausf&uuml;llen";
		$("#reg_name_err").fadeIn("slow");
		valid = false;
	} else if ( $("#reg_name").val().length > 16 ) {
		document.getElementById("reg_name_err").innerHTML = "Name zu lang (max. 16 Zeichen)";
		$("#reg_name_err").fadeIn("slow");
		valid = false;
	} else if ( !check_special($("#reg_name").val()) ) {
		document.getElementById("reg_name_err").innerHTML = "Keine Sonderzeichen (au&szlig;er ! ? + - _ ).";
		$("#reg_name_err").fadeIn("slow");
		valid = false;
	} else {
		var name = $("#reg_name").val();
		$("#reg_name_err").fadeOut("slow");
	}

	if ( $("#reg_email").val()=="E-Mail Adresse eingeben" || $("#reg_email").val()=="" )
	{
		document.getElementById("reg_email_err").innerHTML = "Bitte ausf&uuml;llen";
		$("#reg_email_err").fadeIn("slow");
		valid = false;
	} else if ( !check_special($("#reg_email").val()) ) {
		document.getElementById("reg_email_err").innerHTML = "Keine Sonderzeichen (au&szlig;er ! ? + - _ ).";
		$("#reg_email_err").fadeIn("slow");
		valid = false;
	} else if ( !validateEmail($("#reg_email").val()) ) {
		document.getElementById("reg_email_err").innerHTML = "Ung&uuml;ltige E-mail Adresse";
		$("#reg_email_err").fadeIn("slow");
		valid = false;
	} else {
		var email = $("#reg_email").val();
		$("#reg_email_err").fadeOut("slow");
	}

	if ( $("#reg_emailver").val().replaceUmlaute()=="E-Mail Adresse bestaetigen" || $("#reg_emailver").val()=="" )
	{
		document.getElementById("reg_emailver_err").innerHTML = "Bitte ausf&uuml;llen";
		$("#reg_emailver_err").fadeIn("slow");
		valid = false;
	} else if ( $("#reg_passwordver").val() != $("#reg_password").val() ) {
		document.getElementById("reg_emailver_err").innerHTML = "E-Mail Adressen stimmen nicht &uuml;berein";
		$("#reg_emailver_err").fadeIn("slow");
		valid = false;
	} else if ( !check_special($("#reg_emailver").val()) ) {
		document.getElementById("reg_emailver_err").innerHTML = "Keine Sonderzeichen (au&szlig;er ! ? + - _ ).";
		$("#reg_emailver_err").fadeIn("slow");
		valid = false;
	} else {
		var emailver = $("#reg_emailver").val();
		$("#reg_emailver_err").fadeOut("slow");
	}

	if ( $("#reg_password").val()=="Passwort eingeben (min. 6 Zeichen)" || $("#reg_password").val()=="" )
	{
		document.getElementById("reg_password_err").innerHTML = "Bitte ausf&uuml;llen";
		$("#reg_password_err").fadeIn("slow");
		valid = false;
	} else if ( $("#reg_password").val().length < 6 ) {
		document.getElementById("reg_passwordver_err").innerHTML = "Bitte min. 6 Zeichen eingeben";
		$("#reg_password_err").fadeIn("slow");
		valid = false;
	} else if ( !check_special($("#reg_password").val()) ) {
		document.getElementById("reg_password_err").innerHTML = "Keine Sonderzeichen (au&szlig;er ! ? + - _ ).";
		$("#reg_password_err").fadeIn("slow");
		valid = false;
	} else {
		var password = $("#reg_password").val();
		$("#reg_password_err").fadeOut("slow");
	}

	if ( $("#reg_passwordver").val().replaceUmlaute()=="Passwort bestaetigen" || $("#reg_passwordver").val()=="" )
	{
		document.getElementById("reg_passwordver_err").innerHTML = "Bitte ausf&uuml;llen";
		$("#reg_passwordver_err").fadeIn("slow");
		valid = false;
	} else if ( $("#reg_passwordver").val() != $("#reg_password").val() ) {
		document.getElementById("reg_passwordver_err").innerHTML = "Passw&ouml;rter stimmen nicht &uuml;berein";
		$("#reg_password_err").fadeIn("slow");
		valid = false;
	} else if ( !check_special($("#reg_passwordver").val()) ) {
		document.getElementById("reg_passwordver_err").innerHTML = "Keine Sonderzeichen (au&szlig;er ! ? + - _ ).";
		$("#reg_passwordver_err").fadeIn("slow");
		valid = false;
	} else {
		var passwordver = $("#reg_passwordver").val();
		$("#reg_passwordver_err").fadeOut("slow");
	}

	if ( valid )
	{
		$.ajax({
			type: "POST",
			url: "http://192.168.148.133/Test/index.php/hello_world/register",
			data: { name : name , email : email , password : password }
		})
		.done(function( data ) {
			if ( data == 0 ) {
				$(".reg_field_inner").fadeOut(500);	
				$("#reg_submit").fadeOut(500);
				$("#reg_header").fadeOut(500);
				$("#registerform").css({'-webkit-animation' : 'reg_success 2s' , 'height' : '100px'});
				window.setTimeout(function () {
					$("#reg_header").text("Erfolgreich registriert");
					$("#reg_header").css({'color' : 'rgb(0,128,0)' , 'text-align' : 'center'});
					$("#reg_header").fadeIn("slow");
				}, 700);
			}
			if ( data == 1 ) {
				document.getElementById("reg_email_err").innerHTML = "E-Mail Adresse bereits vergeben";
				$("#reg_email_err").fadeIn("slow");
			}
		})
	}

}

function changeNews(x) {
	//$( "#dialog" ).dialog({ autoOpen: false });
	//$("#dialog").dialog("open");
	
	
	if ( arrow ) {
		arrow = false;
	} else {
		oldid = id;
		id = x;
	}

    $("#newsfade").fadeOut('slow', function() {
        $.ajax({
            type: "POST",
            url: "http://192.168.148.133/Test/index.php/hello_world/update_newsform",
            data: { id: id }
        })
            .done(function( data ) {
                //alert(data);
                var data = data.split("|");
                document.getElementById("newstitle").innerHTML = data[0];
                document.getElementById("newscontent").innerHTML = data[1];
                $("#newsnumber_active").attr("id", "newsnumber_"+oldid);
                $("#newsnumber_"+id).attr("id", "newsnumber_active");
            })
    });
    $("#newsfade").fadeIn('slow');
}


function insertBefore()
{
   var node = document.getElementById('dialog');
   if (!document.getElementById('overlay')) {
   var newNode = document.createElement('div');
      
newNode.setAttribute('id', 'overlay');
	  //newNode.setAttribute('class', 'fade');
	  //newNode.setAttribute('display', 'none');
      node.parentNode.insertBefore(newNode, node );
  }
	  
	  $("#overlay").fadeIn(300, function() {
		  $("#dialog").css({'-webkit-animation' : 'dialog_fade_in 0.5s'});
		  $("#dialog").fadeIn(500);
	  });
}

function closeDialog() {
	var node = document.getElementById('overlay');
	$("#dialog").css({'-webkit-animation' : 'dialog_fade_out 0.5s'});
  $("#dialog").fadeOut(500, function() {
	  $("#overlay").fadeOut(300, function() {
		  node.remove();
		  $(".error").html("");
		  $('.input').val("");
		  $('.a').fadeTo("slow", 0);
		  $('.b').fadeTo("slow", 0);
	  });
  });
}

function validatInvite() {
	var form_data = {
		email: $('.email-input').val(),
		message: $('.message-input').val()
	};
	
	var p;
	p = $('#dialog');
	
	$.ajax({
		type: "POST",
		url: "index.php/hello_world/sendmail",
		data: form_data,
		success: function(data) {
			//var input_class = document.getElementsByClassName("input");
			var input_class = $('.input');
			var email = $("[name='email']");
			//alert(email);
			
			if (!data) {
				//$("#dialog-footer").fadeTo(500, 0);	
				//$("#dialog-title").fadeTo(500, 0);
				//$("#dialog-body").fadeTo(500, 0);
				
				/*$.keyframe.define({
				    name: "test",
				    from: $.keyframe.browserCode()+"transform:rotate(0deg)",
				    to: $.keyframe.browserCode()+"transform:rotate(360deg)",
				});
				
				$("#dialog-content").playKeyframe({
				    name: 'test', // name of the keyframe you want to bind to the selected element
				    duration: 1000, // [optional, default: 0, in ms] how long you want it to last in milliseconds
				    timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
				    delay: 0, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
				    repeat: 'infinite', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
				    direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
				    fillMode: 'forwards' //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
				});*/
				
				/*$("#dialog-content").css({'-webkit-animation' : 'invite_success 2s', 'height' : '100px'});
				window.setTimeout(function () {
					$("#dialog-title").text("Erfolgreich registriert");
					$("#dialog-title").css({'color' : 'rgb(0,128,0)' , 'text-align' : 'center'});
					$("#dialog-title").fadeIn("slow");
				}, 700);*/
				
				
				testAnim();
				
				
				/*$("#dialog-content").animate({
    				height: "100px",
  				}, 1500, function() {
					$("#dialog-title").text("Erfolgreich registriert");
					$("#dialog-title").css({
						'color' : 'rgb(0,128,0)',
						'text-align' : 'center',
						'font-size' : '20px'
					});
					$("#dialog-title").fadeTo("slow", 100);
  				});
				
				
				$.ajax({
					type: "POST",
					url: "index.php/hello_world/dialog",
					success: function(data) {
						closeDialog();
						//alert(data);
						$('#dialog').detach();
						p.appendTo( ".wrapper" );
						//$('#dialog').detach();
						//$('.wrapper').append(data);
					}
				});*/
				
				
				//$('#dialog-content').html("<div class='success'>Erfolgreich eingeladen<div>");
				/*window.setTimeout(function() {
				            window.location.replace("/Test");
				        }, 4000);*/
			}
			else {
				$('.a').fadeTo("slow", 0, function() {
					$('.a').html(data.email_error).fadeTo("slow", 100);
				});
				$('.b').fadeTo("slow", 0, function() {
					$('.b').html(data.message_error).fadeTo("slow", 100);
				});
			}
			
			
			
			
			$(".input").each(function (i) 
			{
				//$(data).insertBefore(this);
				
				
				
				//alert(i);
				//$(this).insertBefore("<?php echo form_error('"+$(this).attr("name")+"', '<div class='error'>', '</div>'); ?>");
				//$(this).val("Test");
				//alert($(this).attr("name"));
				//alert($(this).html(""));
			});
			
			
			/*for ( var i = 0; i < input_class.length; i++ ) {
				alert(i);
				input_class[0].html( "Test" );
			}*/
			
			//alert(data);
			//$('#dialog').load('index.php/hello_world/dialog');
			$("#error").html(data);
			//$("#dialog").css({'display' : 'block'});
		}
	});
}
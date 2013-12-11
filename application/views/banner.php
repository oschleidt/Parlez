<?php

class test {

}

?>

<div id="banner">
    <div class="wrapper">
        <a href="index.php" id="title">Parlez</a><br/>
        <a href="index.php" id="subtitle"> - get connected</a>
        <div id="menu">

            <span id="searchButton"> Suchen <div id="searchArrow" class="menuimg"> </div> </span>


                <input type="text" id="login_email" class="input" value="E-Mail" tabindex="1">
                <img src="img/error_x.png" class="wrong_login" id="wrong_email"/>

                <input type="text" id="login_password" class="input" value="Passwort" tabindex="2" onfocus="$(this).attr('type','password');" >
                <img src="img/error_x.png" class="wrong_login" id="wrong_password"/>

                <input type="button" id="login" value="&nbsp;Login&nbsp;" tabindex="3">


        </div>
    </div>
</div>
<div id="searchbar"> <input type="text" id="searchInput" value="Max Mustermann"/> <img src="<?php echo asset_url();?>img/lupe.png" id="searchLupe"/></div>
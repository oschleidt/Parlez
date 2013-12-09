<div id="newsform">
    <div id="newsinner">
        <div id="newsfade">
        <a
            <?php
            if (isset($news_link)) { echo 'href="'.$news_link.'"'; }
            ?>
            >
            <div id="newstitle">
                <?php
                echo $news_title;
                ?>
            </div>
        </a>
        <div id="newsimage"> </div>
        <div id="newstrenner_1"> </div>
        <div id="newscontent">
            <?php
            echo $news_content;
            ?>
        </div>
        <div id="newstrenner_2"> </div>
        </div>
        <div id="newsnav">
            <div class="" id="newsArrowLeft"> </div>
            <?php
            echo '<div class="newsnumber" id="newsnumber_active">1</div>';
            for($i = 1 ; $i < $news_count ; $i++ ) {
                echo '<div class="newsnumber" id="newsnumber_'.($i+1).'">'.($i+1).'</div>';
            }

            //$i = 0;
            //do {
            //    echo '<div class="newsnumber" id="newsnumber_'.($i+1).'">'.($i+1).'</div>';
            //    $i++;
            //}
            //while ($i < $news_count);
            ?>
            <div class="" id="newsArrowRight"> </div>
        </div>
    </div>
</div>
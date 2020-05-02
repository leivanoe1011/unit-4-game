

    // This is the box where the enemy will be staged to fight
    var defenderBox = $("#defender-pic");

    // The enemies will live here before they are called to fight
    var enemyContainer = $("#enemy-container");

    // Enemy List
    var enemyList = $("#enemy-container");

    // User 
    var currentWarrior = "";


    // When you select your character the other Characters must move
    $.fn.moveEnemies = function(userWarrior){

        user = $(userWarrior).attr("id");

        $("#enemy-container").append('<div class="col-lg-2 col-md-2"></div>');

        $(".enemy-grp").each(function(index, element){
            var currentAttr = $(this).attr("id");
           if( currentAttr !== user){
            $(this).appendTo(enemyList);
           }
        })
    }

    // Validate if the Current ID is in your character container
    $.fn.isCurrentWarrior = function(userWarrior) {
        
        var returnValue = 0

        user = $(userWarrior).attr("id");

        returnValue = $("#your_warrior").find("#" + user).length

        return returnValue;
    }


    // Validate if the Enemy container is empty
    $.fn.isEnemyBoxEmpty = function(){
        
        var enemyBox = $("#enemy-container").find("div.enemy-grp").length;

        return enemyBox;
    }


    // Validate if there is an enemy in the DEFENDER box
    $.fn.isEnemyPresent = function(){
        
        return defenderBox.find('div.enemy-grp').length;
        
    }

    // Swap enemies in Defender Box
    $.fn.cleanUpDefenderBox = function(newEnemy){

        // Get children from Defender Box
        var oldEnemy = defenderBox.children('div')[0];

        // Move Child Above back to the Enemy Container
        $(oldEnemy).appendTo(enemyContainer);

        // Load the new Enemy
        $(newEnemy).appendTo(defenderBox);

    }

    // Get random number multiple of 5
    $.fn.randomEnergy = function() {
        
        // Cannot have 0 so we added 5
        return (Math.floor(Math.random()*11)*5) + 5;
    }


    $.fn.battle = function(enemyName){
        // alert(attackButton.randomEnergy());
        // var enemyScore = $(defenderBox.children('p')[0]).children("span").text();
        var enemyScore = $(defenderBox.find(".warrior-score")).text();

        // var userScore = $(user.children("span")[0]).text();
        var userScore = $(currentWarrior).find(".warrior-score").text();


        var userLostPoints = $(currentWarrior).randomEnergy();

        var enemyLostPoints = defenderBox.randomEnergy();


        var userDamage = userScore - userLostPoints + enemyLostPoints;

        var enemyDamage = enemyScore - enemyLostPoints + userLostPoints;


        $(defenderBox.find(".warrior-score")).text(enemyDamage); 

        $(currentWarrior).find(".warrior-score").text(userDamage)


        $("#user-attack").text("You attacked " + enemyName + " for " + enemyLostPoints + " damage");
        
        $("#enemy-attack").text(enemyName + " attacked you back for " + userLostPoints + " damage");

        if(enemyDamage <= 0){
            alert(enemyName + " Defeated!");
            $(defenderBox.children('div')[0]).remove();
        }
        else if(userDamage <= 0){
            alert("You Lost");
        }

    }


    $("#enemy-1").on("click", function(){

        // if the Enemy Box is not empty and the defender box is empty then clean up the defender box
        if(defenderBox.isEnemyBoxEmpty() === 0){

            defenderBox.moveEnemies(this);

            currentWarrior = this;
        }
        // If the Enemy Box is NOT empty and Defender Box IS empty
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() > 0){

            defenderBox.cleanUpDefenderBox(this);
        }
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() === 0 && defenderBox.isCurrentWarrior(this) < 1) {

            $(this).appendTo(defenderBox);
        }

    });


    $("#enemy-2").on("click", function(){

        // if the Enemy Box is not empty and the defender box is empty then clean up the defender box
        if(defenderBox.isEnemyBoxEmpty() === 0){

            defenderBox.moveEnemies(this);

            currentWarrior = this;
        }
        // If the Enemy Box is NOT empty and Defender Box IS empty
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() > 0){

            defenderBox.cleanUpDefenderBox(this);
        }
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() === 0 && defenderBox.isCurrentWarrior(this) < 1) {

            $(this).appendTo(defenderBox);
        }
        
    });

    $("#enemy-3").on("click", function(){
        
        // if the Enemy Box is not empty and the defender box is empty then clean up the defender box
        if(defenderBox.isEnemyBoxEmpty() === 0){

            defenderBox.moveEnemies(this);

            currentWarrior = this;
        }
        // If the Enemy Box is NOT empty and Defender Box IS empty
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() > 0){

            defenderBox.cleanUpDefenderBox(this);
        }
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() === 0 && defenderBox.isCurrentWarrior(this) < 1) {

            $(this).appendTo(defenderBox);
        }

    });


    $("#enemy-4").on("click", function(){
        
        // if the Enemy Box is not empty and the defender box is empty then clean up the defender box
        if(defenderBox.isEnemyBoxEmpty() === 0){

            defenderBox.moveEnemies(this);

            currentWarrior = this;
        }
        // If the Enemy Box is NOT empty and Defender Box IS empty
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() > 0){

            defenderBox.cleanUpDefenderBox(this);
        }
        else if(defenderBox.isEnemyBoxEmpty() > 0 && defenderBox.isEnemyPresent() === 0 && defenderBox.isCurrentWarrior(this) < 1) {

            $(this).appendTo(defenderBox);
        }

    });


    $("#attack").on("click", function(){
        
        // var enemyName = $($(defenderBox.children('div')[0]).children(".enemy-img")).attr("alt")
        var enemyName = $(defenderBox.find(".enemy-img")).attr("alt");

        if(!defenderBox.isEnemyPresent()){
            
            alert("Select an Enemy first");
        }
        else {
            // Need to remove the score from user and enemy
            enemyName = enemyName.replace(/_/g," ");

            $(currentWarrior).battle(enemyName);
        }
    })


    // another way to write click function
    // $(".call-btn").click(function(){
    //     $.fn.myFunction();
    // });


    
    // Music Player is loaded here to ensure we don't get the DOM Promise issue
    var player = document.getElementById("playlist");

    player.autoplay = false;

    var playlist = player.children;

    var promise =  player.play();



    if (promise !== undefined) {
        promise.then(_ => {
            playMusic();
        }).catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            var btn = document.getElementById("play_music");

            btn.innerHTML = "PLAY MUSIC";

            btn.style.display ="inline";             

        });
    }

    document.getElementById("play_music").addEventListener("click",function(){
        playMusic();
        var btn = document.getElementById("play_music");
        btn.remove();
    });


    // Generate random ID
    function getRandomSong() {
        
        return Math.floor(Math.random() * playlist.length);
        
    }


    function playMusic(){

        // Load random Array index
        var song = playlist[getRandomSong()];

        // Get source mp3 path
        var songSource = song.src;

        // if the a song is playing pause
        player.pause();

        // load the new song
        player.setAttribute('src', songSource);

        // load the song first before playing
        player.load();

        player.play();

    }

    // function listens when the player song ends
    player.onended = function() {
        // Once the song ends, we restart the player
        playMusic();

        // The functions below can be used to stop the player. They have to be used in conjunction
        // player.pause();
        // player.currentTime = 0
    }



    // let isPlaying = false;

    // ["click", "mousemove", "mouseover", "mousemove", "touchmove", "focus"].forEach((eventName)=>{
    //     window.addEventListener(eventName, ()=>{
    //         if(!isPlaying){
            
    //         try{
    //             //play video here
    //             // console.log("Video is playing");
    //             playMusic()
    //             isPlaying = true;
    //         }catch(e){
    //             console.warn(e.message);
    //         }
            
    //         }
    //     }); 
    // });



    // Listen for a click before playing music
    // This will prevent the DOM error
    // document.addEventListener('click', function() {
    // window.onload = function(){
    //     // Once the DOM loads, we can play the music
    //     playMusic();

    // };








    // This is the box where the enemy will be staged to fight
    var defenderBox = $("#defender-pic");

    // The enemies will live here before they are called to fight
    var enemyContainer = $("#enemy-container");

    // User 
    var user = $("#obi_id");


    // validate is user is fighting an enemy
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
        var userScore = $(user.find(".warrior-score")).text();


        var userLostPoints = user.randomEnergy();

        var enemyLostPoints = defenderBox.randomEnergy();


        var userDamage = userScore - userLostPoints + enemyLostPoints;

        var enemyDamage = enemyScore - enemyLostPoints + userLostPoints;


        $(defenderBox.find(".warrior-score")).text(enemyDamage); 

        $(user.find(".warrior-score")).text(userDamage)


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

        if(defenderBox.isEnemyPresent()){
            defenderBox.cleanUpDefenderBox(this);
        }
        else {
            $(this).appendTo(defenderBox);
        }
    });


    $("#enemy-2").on("click", function(){

        if(defenderBox.isEnemyPresent()){
            defenderBox.cleanUpDefenderBox(this);
        }
        else {
            $(this).appendTo(defenderBox);
        }
        
    });

    $("#enemy-3").on("click", function(){
        x
        if(defenderBox.isEnemyPresent()){
            defenderBox.cleanUpDefenderBox(this);
        }
        else {
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

            user.battle(enemyName);
        }
    })

    // another way to write click function
    // $(".call-btn").click(function(){
    //     $.fn.myFunction();
    // });


   







































// This is the box where the enemy will be staged to fight
var defenderBox = $("#defender-pic");

// The enemies will live here before they are called to fight
var enemyContainer = $("#enemy-container");


// validate is user is fighting an enemy
$.fn.isEnemyPresent = function(){
    
    return defenderBox.find('p.enemy-grp').length;
    
    // enemy.find('p#enemy-1').length;
    // alert(found+  ' is Enemy');
}

// Swap enemies in Defender Box
$.fn.cleanUpDefenderBox = function(newEnemy){

    // Get children from Defender Box
    var oldEnemy = defenderBox.children('p')[0];

    // Move Child Above back to the Enemy Container
    $(oldEnemy).appendTo(enemyContainer);

    // Load the new Enemy
    $(newEnemy).appendTo(defenderBox);

}

$.fn.battle = function(){
    
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

    if(defenderBox.isEnemyPresent()){
        defenderBox.cleanUpDefenderBox(this);
    }
    else {
        $(this).appendTo(defenderBox);
    }
});


$("#attack").on("click", function(){
    
    if(!defenderBox.isEnemyPresent()){
        alert("Select an Enemy first");
    }
    else {
        // Need to remove the score from user and enemy
        var enemy = defenderBox.children('p')[0];
    }
})

// another way to write click function
// $(".call-btn").click(function(){
//     $.fn.myFunction();
// });
































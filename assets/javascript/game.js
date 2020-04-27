


$.fn.isEnemyPresent = function(){
    
    return $("#defender-pic").find('p#enemy-1').length;
    
    // enemy.find('p#enemy-1').length;
    // alert(found+  ' is Enemy');
}

$.fn.cleanUpDefenderBox = function(enemy){

    // New enemy
    console.log(enemy);

    // Defender Box
    var defenderBox = $("#defender-pic");

    // Need to move the current enemy into enemy-container
    console.log($("#defender-pic").children('p')[0]);

    var oldEnemy = $("#defender-pic").children('p')[0];

    // Move back to the Enemy Container
    var enemyContainer = $("#enemy-container");

    $(oldEnemy).appendTo(enemyContainer);

    $(enemy).appendTo(defenderBox);

}

$("#enemy-1").on("click", function(){
    alert("got me1");
    var enemy = $("#defender-pic");
    // $("#enemy-1").clone().appendTo(enemy);
    $("#enemy-1").appendTo(enemy);
});

$("#enemy-2").on("click", function(){
    alert("got me2");
    var enemy = $("#defender-pic");
    if(enemy.isEnemyPresent()){
        alert('enemy found');
        enemy.cleanUpDefenderBox(this);
        // I might be able to replace enemy 2 with "this"
        // $("#enemy-2").appendTo(enemy);
    }
    else {
        alert('no enemy');
    }
    
});

$("#enemy-3").on("click", function(){
    alert("got me3");
});


// another way to write click function
// $(".call-btn").click(function(){
//     $.fn.myFunction();
// });
































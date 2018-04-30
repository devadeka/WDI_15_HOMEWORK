var $setColourBtn = $('.set-colour-btn');
var $setColourTxt = $('.set-colour-txt');
var $brushDiv = $('.brush');
var $containerDiv = $('.container');

$setColourBtn.on('click', function(event){
    event.preventDefault();
    $brushDiv.css("background-color", $setColourTxt.val());
});


$( document ).ready(function() {
    for(var i = 0; i<100; i++){
        var $square = $('<p class="square"></p>');
        $containerDiv.append($square);
    }

    $setColourTxt.val("mistyrose");
    $brushDiv.css('background-color',$setColourTxt.val());

});


$containerDiv.on('mouseover', function(event){
    if ($(event.target).hasClass('square')){
        $(event.target).css('background-color',$setColourTxt.val());
    }
})
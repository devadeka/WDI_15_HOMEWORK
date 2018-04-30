var $setColourBtn = $('.set-colour-btn');
var $setColourTxt = $('.set-colour-txt');
var $brushDiv = $('.brush');

$setColourBtn.on('click', function(event){
    event.preventDefault();
    $brushDiv.css("background-color", $setColourTxt.val());
});
var $setColourBtn = $('.set-colour-btn');
var $setColourTxt = $('.set-colour-txt');
var $containerDiv = $('.container');

$( document ).ready(function() {
    for(var i = 0; i<100; i++){
        var $square = $('<p class="square"></p>');
        $containerDiv.append($square);
    }
});

$setColourBtn.on('click', function(event){
    event.preventDefault();
    console.log('click');    
});

$containerDiv.on('click', function(event){
    $(event.target).css('background-color','green');
})
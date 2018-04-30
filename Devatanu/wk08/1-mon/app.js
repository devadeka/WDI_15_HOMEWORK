var $setColourBtn = $('.set-colour-btn');
var $setColourTxt = $('.set-colour-txt');
var $setBackgroundBtn = $('.set-bg-btn');
var $setBackgroundTxt = $('.set-bg-txt');
var $brushDiv = $('.brush');
var $containerDiv = $('.container');
var $bgSelect = $('.bg-select');
var $res = null;
$setColourBtn.on('click', function(event){
    event.preventDefault();
    $brushDiv.css("background-color", $setColourTxt.val());
});


var API_KEY = "2f6435d9";

$setBackgroundBtn.on('click', function(event){
    event.preventDefault();

    var options = {
        url: `http://www.omdbapi.com/?apikey=${API_KEY}&s=${$setBackgroundTxt.val()}`
      }

    
    $.ajax(options).done(function(result){
        
        if(result.Search.length > 0){
            $bgSelect.empty();
            $bgSelect.append($('<option>', {
                value: "none",
                text: 'Select a movie'
            }));
            result.Search.forEach(movie => {
                $bgSelect.append($('<option>', {
                    value: movie.Poster,
                    text: movie.Title
                }));
            });
        }
    });

    $brushDiv.css("background-color", $setColourTxt.val());
});

$bgSelect.on('change', function() {
    $containerDiv.css('background-image',`url("${this.value}")`);
    console.log(this.value);
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
var $btnReset = $('#reset');
var $btnStart = $('#start');
var $btnPause = $('#pause');
var $h1Timer  = $('#timer');

var time_count = 0;
var timer_update = null;

$btnStart.on('click',function(){
	$h1Timer.text(`Time elapsed: ${time_count}`); 
	console.log('clicked');
	timer_update = setInterval(function(){
		console.log(`$(time_count)`); 
		time_count += 1;
		$h1Timer.text(`Time elapsed: ${time_count}`); 
	}, 1000);
});

$btnPause.on('click',function(){
	clearInterval(timer_update);
});

$btnReset.on('click',function(){
	clearInterval(timer_update);
	time_count = 0;
	$h1Timer.text("Stop Watch"); 
});
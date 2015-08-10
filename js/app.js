$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            }
    ); 
})
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        $('.ryu-still').hide(); 
        $('.ryu-cool').hide(); 
    })

$("body").keydown(function(e) {
	if (e.which == 88) {
		$('.ryu-cool').show(); 
		$('.ryu-ready').hide(); 
		$('.ryu-still').hide(); 
		$('.hadouken').hide(); 
	}
})

$("body").keyup(function(e) {
	if (e.which == 88) {
		$('.ryu-cool').hide(); 
		$('.ryu-ready').hide(); 
		$('.hadouken').hide(); 
		$('.ryu-still').show(); 
	}
})

}); 

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

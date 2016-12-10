var playerX;
var playerO;
var onePlayer = false;
var id;
var winner = false;

$(".players > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
$(".symbol > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

$("#onePlayer").click(function() {
	onePlayer = true;
});

$(".board").hide();

$("#chooseX").click(function() {
	playerX = true;
	playerO = false;
});

$("#chooseO").click(function() {
	playerX = false;
	playerO = true;
});

$("#start").click(function() {
	$("#choose").hide();
	$(".board").show();

});

$('div.square-grid__cell').click(function() { 
    id = $(this).attr('id');

	if ($("#" + id)[0].innerText === "")
	{
    	insertChar(id);
	}
	check();
	if (onePlayer && winner === false)
	{
		myVar = setTimeout(computerTurn, 250);
		check();
	}
});

function insertChar(where) {
	if (playerX)
	{
		$("#" + where).text("X");
		playerX = false;
	}
	else if (!playerX)
	{
		$("#" + where).text("O");
		playerX = true;
	}
}

function computerTurn() {
	var target = Math.floor(Math.random() * 9) + 1;
	if ($("#" + target)[0].innerText === "")
	{
		insertChar(target);
	}
	else
	{
	
		computerTurn();
	}
}


function check() {
	//check rows
	for (i = 1; i <= 9; i = i+3) {
		if ($("#\\3" + (i))[0].innerText === $("#\\3" + (i+1))[0].innerText && $("#\\3" + (i))[0].innerText === $("#\\3" + (i+2))[0].innerText)
		{	
			if ($("#\\3" + (i))[0].innerText !== "") 
				{
				console.log("match");
				win($("#\\3" + (i)), $("#\\3" + (i+1)), $("#\\3" + (i+2)));
				}
		}
		else
		{
			console.log("no match");
		}
	}
	//check colums
	for (i = 1; i <= 3; i++) {
		if ($("#\\3" + i)[0].innerText === $("#\\3" + (i+3))[0].innerText && $("#\\3" + i)[0].innerText === $("#\\3" + (i+6))[0].innerText)
		{	
			if ($("#\\3" + i)[0].innerText !== "") 
				{
				console.log("match");
				win($("#\\3" + i), $("#\\3" + (i+3)), $("#\\3" + (i+6)));
				}
		}
		else
		{
			console.log("no match");
		}
	}	
	//check diagonals
	if ($("#\\31")[0].innerText === $("#\\35")[0].innerText && $("#\\31")[0].innerText === $("#\\39")[0].innerText)
		{	
		if ($("#\\31")[0].innerText !== "") 
			{
			console.log("match");
			win($("#\\31"),$("#\\35"),$("#\\39"));
			}	
		}
		else
		{
			console.log("no match");
		}

	if ($("#\\33")[0].innerText === $("#\\35")[0].innerText && $("#\\33")[0].innerText === $("#\\37")[0].innerText)
		{	
		if ($("#\\33")[0].innerText !== "") 
			{
			console.log("match");
			win($("#\\33"),$("#\\35"),$("#\\37"))
			}	
		}
		else
		{
			console.log("no match");
		}
}

function win(){	
	for (var i = 0, j = arguments.length; i < j; i++){
         arguments[i].css('background-color', '#FF6600');
    }
    winner = true;
}

function reset() {
	for (i = 1; i <= 9; i++) {
		$("#" + i).text("");
	}
	$('.square-grid__cell').css('background-color', '#B8B8B8');
	winner = false;
	onePlayer = false;
}

function back() {
	$(".board").hide();
	$("#choose").show();
	reset();
}

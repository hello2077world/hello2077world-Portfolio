// wyniki
var wynikX=0;
var wynikO=0;
var draw=0;

var ktoWygral="";
var ktoryZawodnik=1;
var ktoryBox;
var koniec=false;

var headerTekst = document.getElementById("header").innerHTML;	
var correct = new Audio("correct.wav");
var win1 = new Audio("win1.wav");
var win2 = new Audio("win2.wav");
var draw_sound = new Audio("draw.wav");
var odegraj = function() {correct.load(); correct.play(); setTimeout(function(){correct.pause()},270); };

// zmienne przechwytujace boxy
var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var b7 = document.getElementById("box7");
var b8 = document.getElementById("box8");
var b9 = document.getElementById("box9");

window.onload = start;

// START
function start() {
	// wstaw znak X
	if(ktoryZawodnik === 1 && koniec==false) {
		// if(b1.childNodes.length == 0)b1.onclick - jeśli w divie box1 ilość węzłów(elemtnów) wynosi zero to pozwól kliknąć w box1
		if(b1.childNodes.length == 0)b1.onclick = function() {odegraj(); ktoryBox=1; znakX()};
		if(b2.childNodes.length == 0)b2.onclick = function() {odegraj(); ktoryBox=2; znakX()};
		if(b3.childNodes.length == 0)b3.onclick = function() {odegraj(); ktoryBox=3; znakX()};
		if(b4.childNodes.length == 0)b4.onclick = function() {odegraj(); ktoryBox=4; znakX()};
		if(b5.childNodes.length == 0)b5.onclick = function() {odegraj(); ktoryBox=5; znakX()};
		if(b6.childNodes.length == 0)b6.onclick = function() {odegraj(); ktoryBox=6; znakX()};
		if(b7.childNodes.length == 0)b7.onclick = function() {odegraj(); ktoryBox=7; znakX()};
		if(b8.childNodes.length == 0)b8.onclick = function() {odegraj(); ktoryBox=8; znakX()};
		if(b9.childNodes.length == 0)b9.onclick = function() {odegraj(); ktoryBox=9; znakX()};
	}

	// wstaw znak O
	else if(ktoryZawodnik == 2 && koniec==false) {
		if(b1.childNodes.length == 0)b1.onclick = function() {odegraj(); ktoryBox=1; znakO()};
		if(b2.childNodes.length == 0)b2.onclick = function() {odegraj(); ktoryBox=2; znakO()};
		if(b3.childNodes.length == 0)b3.onclick = function() {odegraj(); ktoryBox=3; znakO()};
		if(b4.childNodes.length == 0)b4.onclick = function() {odegraj(); ktoryBox=4; znakO()};
		if(b5.childNodes.length == 0)b5.onclick = function() {odegraj(); ktoryBox=5; znakO()};
		if(b6.childNodes.length == 0)b6.onclick = function() {odegraj(); ktoryBox=6; znakO()};
		if(b7.childNodes.length == 0)b7.onclick = function() {odegraj(); ktoryBox=7; znakO()};
		if(b8.childNodes.length == 0)b8.onclick = function() {odegraj(); ktoryBox=8; znakO()};
		if(b9.childNodes.length == 0)b9.onclick = function() {odegraj(); ktoryBox=9; znakO()};
	}
	
	// koniec
	else {
		console.log(wynikX, draw, wynikO);
		b1.onclick = function() {return false};
		b2.onclick = function() {return false};
		b3.onclick = function() {return false};
		b4.onclick = function() {return false};
		b5.onclick = function() {return false};
		b6.onclick = function() {return false};
		b7.onclick = function() {return false};
		b8.onclick = function() {return false};
		b9.onclick = function() {return false};
		
		if(ktoWygral=="X")
			punktX();
		else if(ktoWygral=="O")
			punktO();
		else if(ktoWygral=="draw")
			punktDraw();
		
	}
	
}


// funkcja wstawiajaca znak X
function znakX() {
	if(ktoryBox==1)
		document.getElementById("box1").innerHTML = "X";
	else if(ktoryBox==2)
		document.getElementById("box2").innerHTML = "X";
	else if(ktoryBox==3)
		document.getElementById("box3").innerHTML = "X";
	else if(ktoryBox==4)
		document.getElementById("box4").innerHTML = "X";
	else if(ktoryBox==5)
		document.getElementById("box5").innerHTML = "X";
	else if(ktoryBox==6)
		document.getElementById("box6").innerHTML = "X";
	else if(ktoryBox==7)
		document.getElementById("box7").innerHTML = "X";
	else if(ktoryBox==8)
		document.getElementById("box8").innerHTML = "X";
	else if(ktoryBox==9)
		document.getElementById("box9").innerHTML = "X";
		
	ktoryZawodnik=2;
	sprawdz();	
}
	
// funkcja wstawiajaca znak O	
function znakO() {
	if(ktoryBox==1)
		document.getElementById("box1").innerHTML = "O";
	else if(ktoryBox==2)
		document.getElementById("box2").innerHTML = "O";
	else if(ktoryBox==3)
		document.getElementById("box3").innerHTML = "O";
	else if(ktoryBox==4)
		document.getElementById("box4").innerHTML = "O";
	else if(ktoryBox==5)
		document.getElementById("box5").innerHTML = "O";
	else if(ktoryBox==6)
		document.getElementById("box6").innerHTML = "O";
	else if(ktoryBox==7)
		document.getElementById("box7").innerHTML = "O";
	else if(ktoryBox==8)
		document.getElementById("box8").innerHTML = "O";
	else if(ktoryBox==9)
		document.getElementById("box9").innerHTML = "O";
	
	ktoryZawodnik=1;
	sprawdz();
}	

function sprawdz() {
	
	// sprawdz box1, box2, box3 (pozioma1)
	if(b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && b2.innerHTML == b3.innerHTML && b1.innerHTML != "" && b2.innerHTML != "" && b3.innerHTML != "") {
		if(b1.innerHTML == "X" && b2.innerHTML == "X" && b3.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b1.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b2.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b3.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b1.innerHTML == "O" && b2.innerHTML == "O" && b3.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b1.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b2.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b3.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
		
	}
	
	// sprawdz box4, box5, box6 (pozioma2)
	else if(b4.innerHTML == b5.innerHTML && b4.innerHTML == b6.innerHTML && b5.innerHTML == b6.innerHTML && b4.innerHTML != "" && b5.innerHTML != "" && b6.innerHTML != "") {
		if(b4.innerHTML == "X" && b5.innerHTML == "X" && b6.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b4.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b6.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b4.innerHTML == "O" && b5.innerHTML == "O" && b6.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b4.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b6.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	// sprawdz box7, box8, box9 (pozioma3)
	else if(b7.innerHTML == b8.innerHTML && b7.innerHTML == b9.innerHTML && b8.innerHTML == b9.innerHTML && b7.innerHTML != "" && b8.innerHTML != "" && b9.innerHTML != "") {
		if(b7.innerHTML == "X" && b8.innerHTML == "X" && b9.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b7.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b8.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b9.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b7.innerHTML == "O" && b8.innerHTML == "O" && b9.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b7.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b8.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b9.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	// sprawdz box1, box4, box7 (pionowa1)
	else if(b1.innerHTML == b4.innerHTML && b1.innerHTML == b7.innerHTML && b4.innerHTML == b7.innerHTML && b1.innerHTML != "" && b4.innerHTML != "" && b7.innerHTML != "") {
		if(b1.innerHTML == "X" && b4.innerHTML == "X" && b7.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b1.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b4.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b7.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b1.innerHTML == "O" && b4.innerHTML == "O" && b7.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b1.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b4.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b7.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	// sprawdz box2, box5, box8 (pionowa2)
	else if(b2.innerHTML == b5.innerHTML && b2.innerHTML == b8.innerHTML && b5.innerHTML == b8.innerHTML && b2.innerHTML != "" && b5.innerHTML != "" && b8.innerHTML != "") {
		if(b2.innerHTML == "X" && b5.innerHTML == "X" && b8.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b2.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b8.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b2.innerHTML == "O" && b5.innerHTML == "O" && b8.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b2.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b8.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	// sprawdz box3, box6, box9 (pionowa3)
	else if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML && b6.innerHTML == b9.innerHTML && b3.innerHTML != "" && b6.innerHTML != "" && b9.innerHTML != "") {
		if(b3.innerHTML == "X" && b6.innerHTML == "X" && b9.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b3.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b6.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b9.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b3.innerHTML == "O" && b6.innerHTML == "O" && b9.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b3.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b6.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b9.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	// sprawdz box1, box5, box9 (ukos1)
	else if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML && b5.innerHTML == b9.innerHTML && b1.innerHTML != "" && b5.innerHTML != "" && b9.innerHTML != "") {
		if(b1.innerHTML == "X" && b5.innerHTML == "X" && b9.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b1.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b9.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b1.innerHTML == "O" && b5.innerHTML == "O" && b9.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b1.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b9.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	// sprawdz box7, box5, box3 (ukos2)
	else if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML && b5.innerHTML == b3.innerHTML && b7.innerHTML != "" && b5.innerHTML != "" && b3.innerHTML != "") {
		if(b7.innerHTML == "X" && b5.innerHTML == "X" && b3.innerHTML == "X") {
			ktoWygral="X";
			wynikX++;
			b7.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b3.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else if (b7.innerHTML == "O" && b5.innerHTML == "O" && b3.innerHTML == "O") {
			ktoWygral="O";
			wynikO++;
			b7.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b5.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
			b3.innerHTML = '<span style="color:#aa0044">'+ktoWygral+'</span>';
		}
		else {
			ktoWygral="draw";
			draw++;		
		}
		koniec=true;
		document.getElementById("header").innerHTML = "Wygrałeś!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	else if(b1.innerHTML.length == 1 && b2.innerHTML.length == 1 && b3.innerHTML.length == 1 && b4.innerHTML.length == 1 && b5.innerHTML.length == 1 && b6.innerHTML.length == 1 && b7.innerHTML.length == 1 && b8.innerHTML.length == 1 && b9.innerHTML.length == 1 ) {
		koniec=true;
		ktoWygral="draw";
		draw++;
		document.getElementById("header").innerHTML = "Remis!"+'<span class="win" onclick="jeszczeRaz();"> JESZCZE RAZ?</span>';
	}
	
	
	start();
	
}

function punktX() {
	var scoreX = document.getElementById("scoreX").innerHTML = wynikX;
	win1.play();
}

function punktO() {
	var scoreO = document.getElementById("scoreO").innerHTML = wynikO;
	win2.play();
}

function punktDraw() {
	var scoreDraw = document.getElementById("scoreDraw").innerHTML = draw;
	draw_sound.play();
}

function jeszczeRaz() {
	b1.innerHTML = "";
	b2.innerHTML = "";
	b3.innerHTML = "";
	b4.innerHTML = "";
	b5.innerHTML = "";
	b6.innerHTML = "";
	b7.innerHTML = "";
	b8.innerHTML = "";
	b9.innerHTML = "";
	
	ktoWygral="";
	ktoryZawodnik=1;
	koniec=false;
	
	document.getElementById("header").innerHTML = headerTekst;
	
	start();
	
}	
var y = 15; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0; //Velocidad
var g = 1.622; //Gravedad de la luna
var a = g;//Velocidad inicial de la nave
var dt = 0.016683;//Temporizador
var timer;
var f = 10;
var fueltimer = 1;

//Cuando se carga toda la página se ejecuta todo lo que esta dentro de windows.onload
window.onload = function(){
	document.getElementById("song").style.display="none";
//Pulsa el boton de espacio y la nave arranca o se para
	document.body.onclick=function(e){
	if (a==g) {
		motorOn();
		fueltimer= fueltimer - 1;
	} else {
		motorOff();
	}
}

//Empezar a mover nave
	start();

}


//Temporizador start
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

//Temporizador stop
function stop(){
	clearInterval(timer);
}
//fuel
function fuel(){
document.getElementById("fuel").innerHTML=f;	
}

//Funcion para mover la nave (gravedad, aceleración...)
function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v;
	y +=v*dt;
	document.getElementById("altura").innerHTML=y;
	//Condición de en que parte de la pantalla tiene que parar la nave
function fueltime(start){
	f -= fueltimer;
	document.getElementById("fuel").innerHTML=f;
}
	
	if (y<14){
			motorOff();
		}

	if (y<86){ 
		document.getElementById("fuego").style.top = y+7.9+"%";
		document.getElementById("nave").style.top = y+"%";
		document.getElementById("explosion").style.top = y-20+"%";   
	} else { 
		stop();
		document.getElementById("fuego").style.display = "none";

//Mensage de has ganado o perdido
		if (y>=86 && v < 5) {
			document.getElementById("ganado").style.display="block";
			document.getElementById("reiniciar").style.display="block";
		} else {
			document.getElementById("perdido").style.display="block";
			document.getElementById("reiniciar").style.display="block";
			document.getElementById("explosion").style.display="block";
			document.getElementById("nave").style.display="none";
		}

		document.getElementById("reiniciar").onclick= function refresh()
    	{
        location.reload(true);
    	}
	}
}


//Función donde se enciende el motor la gravedad es negativa y la nave sube
function motorOn(){
	a = -g-1;
	document.getElementById("fuego").style.display = "block";
}

//Función donde el motor se apaga y esta como al incio
function motorOff(){
	a=g;
	document.getElementById("fuego").style.display = "none";
}



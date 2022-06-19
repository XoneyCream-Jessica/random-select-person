var timer=null;
var start=document.getElementsByClassName("start")[0];
var stop=document.getElementsByClassName("stop")[0];
var oLi=document.getElementsByTagName("li");
start.onclick=function(){
	clearInterval(timer);
	timer=setInterval(function(){
		var i=Math.floor(Math.random()*39);
		var li_len=oLi.length;
		for(var j=0;j<li_len;j++){
			oLi[j].className="no";
			oLi[j].style.backgroundColor="antiquewhite";
		}
		oLi[i].style.backgroundColor="crimson";
		oLi[i].className="selected";
		console.log(i);
	},100);
};

stop.onclick=function(){
	clearInterval(timer);
	var select=document.getElementsByClassName("selected")[0];
	var name=select.innerText;
	var nameSpan=document.getElementsByClassName("select-name")[0];
	nameSpan.innerText=name;
}
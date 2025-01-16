var offsetxpoint=-60 //Customize x offset of tooltip
var offsetypoint=20 //Customize y offset of tooltip
var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
if (ie||ns6)
var tipobj=document.all? document.all["dhtmltooltip"] : document.getElementById? document.getElementById("dhtmltooltip") : ""

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function ddrivetip(thetext, thecolor, thewidth){
if (ns6||ie){
if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
if (typeof thecolor!="undefined" && thecolor!="") tipobj.style.backgroundColor=thecolor
tipobj.innerHTML=thetext
enabletip=true
return false
}
}

function positiontip(e){
if (enabletip){
var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
//Find out how close the mouse is to the corner of the window
var rightedge=ie&&!window.opera? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20
var bottomedge=ie&&!window.opera? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20

var leftedge=(offsetxpoint<0)? offsetxpoint*(-1) : -1000

//if the horizontal distance isn't enough to accomodate the width of the context menu
if (rightedge<tipobj.offsetWidth)
//move the horizontal position of the menu to the left by it's width
tipobj.style.left=ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
else if (curX<leftedge)
tipobj.style.left="5px"
else
//position the horizontal position of the menu where the mouse is positioned
tipobj.style.left=curX+offsetxpoint+"px"

//same concept with the vertical position
if (bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
else
tipobj.style.top=curY+offsetypoint+"px"
tipobj.style.visibility="visible"
}
}

function hideddrivetip(){
if (ns6||ie){
enabletip=false
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''
}
}

document.onmousemove=positiontip



function emailthis(s,b,d){
	var et='mailto:?subject=WorldwideBrands.com%20Article:%20'+escape(s)+'&body='+escape(s)+'%0D%0A'+escape(b)+'%0D%0Ahttp://www.worldwidebrands.com/wwb/news_detail2.asp?id='+ d + '%0D%0A';
	location.href=et;
}

function emailthis3(s,b,d){
	var et='mailto:?subject=WorldwideBrands.com%20Article:%20'+escape(s)+'&body='+escape(s)+'%0D%0A'+escape(b)+'%0D%0Ahttp://www.worldwidebrands.com/wwb/news_detail2.asp?id='+ d + '%0D%0A';
	location.href=et;
}

function emailthis4(s,b,d){
	var et='mailto:?subject=WorldwideBrands.com%20Article:%20'+escape(s)+'&body='+escape(s)+'%0D%0A'+escape(b)+'%0D%0Ahttp://www.worldwidebrands.com/wwb/news_detail3.asp?id='+ d + '%0D%0A';
	location.href=et;
}

function emailthis5(s,b,d){
	var et='mailto:?subject=WorldwideBrands.com%20Spotlighted Supplier-Product Source of the Week:%20'+escape(s)+'&body=I found this supplier in the Infinity Phoenix newsletter in the spotlight supplier of the week section. The name of the supplier is '+escape(s)+'.%0D%0AYou can check out their newsletter and the rest of the supplier information by going to their newsletter at:%0D%0Ahttp://www.worldwidebrands.com/wwb/news_detail3.asp?id='+ d + '%0D%0A';
	location.href=et;
}

function emailthis6(s,b,d){
	var et='mailto:?subject=Recommendation for the Infinity Phoenix Affiliate Program and Affiliate Newsletter '+escape(s)+'&body=You have been sent a recommendation to read the Infinity Phoenix Affiliate Newsletter by [Name]:%0D%0ATo read the newsletter, please go to: http://www.myaffiliateprogram.com/u/worldwid/t.asp?id=XXXXX&p=/wwb/affnews_detail.asp?id='+ d + '%0D%0AYou can also join the Infinity Phoenix Affiliate Program for FREE and earn 25% commission on their products%0D%0A';
	location.href=et;
}


function emailthis7(s,b,d,e){
	var et='mailto:?subject=WorldwideBrands.com Spotlighted Supplier-Product Source of the Week: '+unescape(s)+'&body=I found this supplier through Auction TNT\'s Supplier of the week by Infinity Phoenix. The name of the supplier is '+unescape(s)+'%0D%0AYou can check out Infinity Phoenix\' newsletter for more supplier information:%0D%0Ahttp://www.worldwidebrands.com/wwb/news_detail3.asp?id='+ d + '%26kbid=' + e +'%0D%0A%0D%0A';
	location.href=et;
}
function printthis1(id) {
MM_openBrDir('newsprint1.asp?id='+id,'newsletter','scrollbars=yes,width=500,height=440')

}

function printthis2(id) {
MM_openBrDir('newsprint2.asp?id='+id,'newsletter','scrollbars=yes,width=500,height=440')

}

function printthis3(id) {
MM_openBrDir('newsprint3.asp?id='+id,'newsletter','scrollbars=yes,width=500,height=440')

}


function printthis4(id) {
MM_openBrDir('newsprint4.asp?id='+id,'newsletter','scrollbars=yes,width=500,height=440')

}

function printthis5(id) {
MM_openBrDir('/wwb/newsprint5.asp?id='+id,'newsletter','scrollbars=yes,width=500,height=440')

}
function printthis6(id) {
MM_openBrDir('/wwb/newsprint6.asp?id='+id,'newsletter','scrollbars=yes,width=500,height=440')

}


function printthis7(id,id2) {
MM_openBrDir('/wwb/newsprint5.asp?id='+id+'&kbid='+id2,'newsletter','scrollbars=yes,width=500,height=440')

}


function MM_openBrDir(theURL,winName,features) { 
   var win_position = ',left=300,top=200,screenX=300,screenY=200';
   var newWindow = window.open(theURL,winName,features+win_position);
   newWindow.focus();
   newWindow.print();
}

function imageholderclass(){
	this.over=new Array();
	this.down=new Array();
	this.src=new Array();
	this.store=store;
	
	function store(src, down, over){
		var AL=this.src.length;
		this.src[AL]=new Image(); this.src[AL].src=src;
		this.over[AL]=new Image(); this.over[AL].src=over;
		this.down[AL]=new Image(); this.down[AL].src=down;
	}
}

var ih = new imageholderclass();
var mouseisdown=0;

function preloader(t){
	for(i=0;i<t.length;i++){
		if(t[i].getAttribute('srcover')||t[i].getAttribute('srcdown')){
			
			storeimages(t[i]);
			var checker='';
			checker=(t[i].getAttribute('srcover'))?checker+'A':checker+'';
			checker=(t[i].getAttribute('srcdown'))?checker+'B':checker+'';
			
			switch(checker){
			case 'A' : mouseover(t[i]);mouseout(t[i]); break;
			case 'B' : mousedown(t[i]); mouseup2(t[i]); break;
			case 'AB' : mouseover(t[i]);mouseout(t[i]); mousedown(t[i]); mouseup(t[i]); break;
			default : return;			
			}
			
			if(t[i].src){t[i].setAttribute("oldsrc",t[i].src);}
		}
	}
}
function mouseup(t){
	var newmouseup;
	if(t.onmouseup){
		t.oldmouseup=t.onmouseup;
		newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("srcover");this.oldmouseup();}

	}
	else{newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("srcover");}}
	t.onmouseup=newmouseup;
}

function mouseup2(t){
	var newmouseup;
	if(t.onmouseup){
		t.oldmouseup=t.onmouseup;
		newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("oldsrc");this.oldmouseup();}
		}
	else{newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("oldsrc");}}
	t.onmouseup = newmouseup;
}

function mousedown(t){
	var newmousedown;
	if(t.onmousedown){
		t.oldmousedown=t.onmousedown;
		newmousedown=function(){if(mouseisdown==0){this.src=this.getAttribute("srcdown");this.oldmousedown();}}
	}
	else{newmousedown=function(){if(mouseisdown==0){this.src=this.getAttribute("srcdown");}}}
	t.onmousedown=newmousedown;
}
function clearall() {
var t=document.getElementsByTagName('IMG');
var newmouseout;

	for(i=0;i<t.length;i++){
		if(t[i].getAttribute('topmenu')=="yes"){

		t[i].src = t[i].oldsrc;
		if(t[i].onmouseout){
			t[i].oldmouseout=t[i].onmouseout;
			t[i].src=t[i].getAttribute("oldsrc");
			t[i].oldmouseout();
			}
		else{ t[i].src=t[i].getAttribute("oldsrc");}
	
			}
		}


}

function mouseover(t){
	var newmouseover;
	if(t.onmouseover){
		t.oldmouseover=t.onmouseover;
		newmouseover=function(){
			
			if (t.topmenu == "yes" ) {	clearall(); }
			
			this.src=this.getAttribute("srcover");this.oldmouseover();
			}
	}
	else{newmouseover=function(){
	if (t.topmenu == "yes" ) {	clearall(); }
	
	this.src=this.getAttribute("srcover");}}
	t.onmouseover=newmouseover;
}

function mouseout(t){
	var newmouseout;
	if(t.onmouseout){
		t.oldmouseout=t.onmouseout;
		newmouseout=function(){
		if (t.topmenu != "yes" ) {
		this.src=this.getAttribute("oldsrc");
		this.oldmouseout();
		}
		}
	}
	else{newmouseout=function(){
	if (t.topmenu != "yes" ) {
	this.src=this.getAttribute("oldsrc");
	}
	}
	}
	t.onmouseout=newmouseout;
}

function storeimages(t){
	var s=(t.getAttribute('src'))?t.getAttribute('src'):'';
	var d=(t.getAttribute('srcdown'))?t.getAttribute('srcdown'):'';
	var o=(t.getAttribute('srcover'))?t.getAttribute('srcover'):'';
	ih.store(s,d,o);
}

function preloadimgsrc(){
	if(!document.getElementById) return;
	var it=document.getElementsByTagName('IMG');
	var it2=document.getElementsByTagName('INPUT');
	preloader(it);
	preloader(it2);
}

if(window.addEventListener){window.addEventListener("load", preloadimgsrc, false);} 
else{
	if(window.attachEvent){window.attachEvent("onload", preloadimgsrc);}
	else{if(document.getElementById){window.onload=preloadimgsrc;}}
}
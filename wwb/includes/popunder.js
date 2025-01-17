
// Popup Windows - V 3.1
// Author: Brian Gosselin w/ changes by Dynamicdrive.com
// Site URL: http://scriptasylum.com
// Script featured on Dynamic Drive (http://www.dynamicdrive.com)
// Added option to pop up ONCE per browser session by Dynamic Drive
//
// Browser compatibility:
// IE4+, NS4+, NS6+ (with limited functionality in pre 5.0 browsers)


var w3c=(document.getElementById)? true: false;
var ie5=(w3c && document.all)? true : false;
var ns6=(w3c && (navigator.appName=="Netscape"))? true: false;
currIDb=null; xoff=0; yoff=0;
currRS=null; rsxoff=0; rsyoff=0;
oldac=null; newac=null; zdx=1; mx=0; my=0;

var idlist=new Array();
idlist.btns=new Array();
idlist.btns[0]=new Image(); idlist.btns[0].src="/1/pop/min.gif";
idlist.btns[1]=new Image(); idlist.btns[1].src="/1/pop/max.gif";
idlist.btns[2]=new Image(); idlist.btns[2].src="/1/pop/close.gif";
idlist.btns[3]=new Image(); idlist.btns[3].src="/1/pop/resize.gif";

function truebody(){ //Dynamic Drive added function
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function hidebox(id){
if(w3c){
document.getElementById(id+'_b').style.display='none';
document.getElementById(id+'_s').style.display='none';

var bx=document.getElementById('modal23').style;
bx.zIndex=0;
bx.visibility="hidden";

}}

function showbox(id){
if(w3c){
var bx=document.getElementById(id+'_b').style;
var sh=document.getElementById(id+'_s').style;
document.getElementById(id+'_s').style.display='none';

bx.display='block';
//sh.display='block';
//sh.zIndex=900;
bx.zIndex=900;


var bx=document.getElementById('modal23').style;
bx.zIndex=0;
bx.visibility="visible";
}}

function minimize(){
if(w3c){
this.IDS[0].style.height=(ie5)? '28px':'24px';
this.IDS[3].style.height='28px';
this.IDS[2].style.display='none';
this.IDS[4].style.display='none';
setTimeout('ns6bugfix()',100);
}}

function restore(){
if(w3c){
var h=this.IDS[10];
this.IDS[0].style.height=h+'px'; //box
this.IDS[3].style.height=(ie5)? h+'px':h+5+'px'; //shd
this.IDS[2].style.display='block';
this.IDS[4].style.display='block'; 
setTimeout('ns6bugfix()',100);
}}

function ns6bugfix(){
self.resizeBy(0,1);
self.resizeBy(0,-1);
}

function trackmouse(evt){
mx=(ie5)?event.clientX+truebody().scrollLeft:evt.pageX;
my=(ie5)?event.clientY+truebody().scrollTop:evt.pageY;
if(!ns6)movepopup();
if((currIDb!=null)||(currRS!=null))return false;
}

function movepopup(){
if((currIDb!=null)&&w3c){
var x=mx+xoff;
var y=my+yoff;
currIDb.style.left=x+'px';
currIDs.style.left=x+8+'px';
currIDb.style.top=y+'px';
currIDs.style.top=y+8+'px';
}
if((currRS!=null)&&w3c){
var rx=mx+rsxoff;
var ry=my+rsyoff;
var c=currRS;
c.style.left=Math.max(rx,((ie5)?88:92))+'px';
c.style.top=Math.max(ry,((ie5)?68:72))+'px';
c.IDS[0].style.width=Math.max(rx+((ie5)?12:8),100)+'px';
c.IDS[0].style.height=Math.max(ry+((ie5)?12:8),80)+'px';
c.IDS[1].style.width=Math.max(rx+((ie5)?4:3),((ns6)?95:92))+'px';
c.IDS[5].style.left=parseInt(c.IDS[1].style.width)-48+'px';
c.IDS[3].style.width=Math.max(rx+12,((ie5)?100:104))+'px';
c.IDS[3].style.height=Math.max(ry+((ie5)?12:13),((ie5)?80:86))+'px';
c.IDS[2].style.width=Math.max(rx-((ie5)?-5:5),((ie5)?92:87))+'px';
c.IDS[2].style.height=Math.max(ry-((ie5)?24:28),44)+'px';
c.IDS[10]=parseInt(c.IDS[0].style.height);
}}

function startRS(evt){
var ex=(ie5)?event.clientX+truebody().scrollLeft:evt.pageX;
var ey=(ie5)?event.clientY+truebody().scrollTop:evt.pageY;
rsxoff=parseInt(this.style.left)-ex;
rsyoff=parseInt(this.style.top)-ey;
currRS=this;
if(ns6)this.IDS[2].style.overflow='hidden';
return false;
}

function stopdrag(){
currIDb=null;
ns6bugfix();
}

function grab_id(evt){
var ex=(ie5)?event.clientX+truebody().scrollLeft:evt.pageX;
var ey=(ie5)?event.clientY+truebody().scrollTop:evt.pageY;
xoff=parseInt(this.IDS[0].style.left)-ex;
yoff=parseInt(this.IDS[0].style.top)-ey;
currIDb=this.IDS[0];
currIDs=this.IDS[3];
return false;
}

function subBox(x,y,w,h,bgc,id){
var v=document.createElement('div');
//var v=document.getElementById("Div_POP")
v.setAttribute('id',id); 
//v.style.position='absolute';
//v.style.left=x+'px';
//v.style.top=y+'px';
v.style.width=w+'px';
v.style.height=h+'px';
//v.style.backgroundColor=bgc;
v.style.visibility='visible';
v.style.padding='0px 0px 0px 0px';
return v;
}

function get_cookie(Name) {
var search = Name + "="
var returnvalue = ""
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) {
offset += search.length
end = document.cookie.indexOf(";", offset)
if (end == -1)
end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}


function popUp(x,y,w,h,cid,bgcolor,textcolor,fontstyleset,title,titlecolor,titletextcolor,bordercolor,scrollcolor,shadowcolor,showonstart,isdrag,isresize,oldOK,POPPERSESSION){
var proceedtopop=false
if (POPPERSESSION){
if (get_cookie(cid)==""){
proceedtopop=true
document.cookie=cid+"=yes"
}
}
else
proceedtopop=true
if (proceedtopop){

if(w3c){
var tw, th;
w=Math.max(w,100);
h=Math.max(h,80);
var rdiv=new subBox(w-((ie5)?12:8),h-((ie5)?12:8),0,0,'',cid+'_rs');
tw=(ie5)?w:w+4;
th=(ie5)?h:h+6;
var shadow=new subBox(x,y,0,0,shadowcolor,cid+'_s');
if(ie5)shadow.style.filter="alpha(opacity=50)";
else shadow.style.MozOpacity=.5;
shadow.style.zIndex=++zdx;

alert(cid+'_s');
var tw,th;
var outerdiv=new subBox(x,y,w,h,bordercolor,cid+'_b');
//outerdiv.style.borderStyle="outset";
//outerdiv.style.borderWidth="2px";
//outerdiv.style.borderColor=bordercolor;
//outerdiv.style.zIndex=++zdx;
tw=(ie5)?w-8:w-5;
th=(ie5)?h+4:h-4;
//var titlebar=new subBox(2,2,tw,20,titlecolor,cid+'_t');
//titlebar.style.overflow="hidden";


//titlebar.style.cursor="default";
//titlebar.innerHTML='';
tw=(ie5)?w-7:w-13;
th=(ie5)?h-36:h-36;
var content=new subBox(0,0,tw,th,bgcolor,cid+'_c');
content.style.borderColor=bordercolor;
content.style.borderStyle="none";
content.style.borderWidth="0px";
content.style.overflow="hidden";
content.style.padding="0px 0px 0px 0px";
content.style.font=fontstyleset;
content.style.color=textcolor;
if(ie5)content.style.scrollbarBaseColor=scrollcolor;
outerdiv.appendChild(content);
document.body.appendChild(shadow);
document.body.appendChild(outerdiv);
if(!showonstart)hidebox(cid);
var IDS=new Array();
IDS[0]=document.getElementById(cid+'_b');
IDS[2]=document.getElementById(cid+'_c');
IDS[3]=document.getElementById(cid+'_s');
IDS[8]=document.getElementById(cid+'_cls');
IDS[9]=cid;
IDS[10]=h;
this.IDb=IDS[0]; this.IDb.IDS=IDS;
this.IDc=IDS[2]; this.IDc.IDS=IDS;
this.IDs=IDS[3]; this.IDs.IDS=IDS;
this.IDb.activecolor=titlecolor;
this.IDb.inactivecolor=scrollcolor;
//if(oldac!=null)oldac.IDS[1].style.backgroundColor=oldac.inactivecolor;
oldac=this.IDb;
this.IDb.onmousedown=function(){
   if(oldac!=null){
   //oldac.IDS[1].style.backgroundColor=oldac.inactivecolor;
   }
   if(ns6)this.IDS[2].style.overflow='auto';
   oldac=this;
   //this.IDS[1].style.backgroundColor=this.activecolor;
   this.IDS[3].style.zIndex=++zdx;
   this.style.zIndex=++zdx;
   }
if(isdrag){
//this.IDt.onmousedown=grab_id;
//this.IDt.onmouseup=stopdrag;
}
}else{
if(oldOK){
var ctr=new Date();
ctr=ctr.getTime();
var win=window.open("" , "abc"+ctr , "status=no,menubar=no,width="+w+",height="+h+",resizable=yes,scrollbars=yes");
var t='<html><head><title>'+title+'</title></head><body bgcolor="'+bgcolor+'"><font style="font:'+fontstyleset+'; color:'+textcolor+'">'+text+'</font></body></html>';
win.document.write(t);
win.document.close();
}}}}

if(ns6)setInterval('movepopup()',40);

if(w3c){
document.onmousemove=trackmouse;
document.onmouseup=new Function("currRS=null");
}
 
 
 
 
 
 
// 
// 
// scroll code
//
//

var ie=document.all
var dom=document.getElementById
var ns4=document.layers
var ns6=document.getElementById&&!document.all
var calunits=document.layers? "" : "px"

var bouncelimit=32 //(must be divisible by 8)
var direction="up"
var lpos

function initbox(){
if (!dom&&!ie&&!ns4)
return
crossobj=(dom)?document.getElementById("dropin").style : ie? document.all.dropin : document.dropin
scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
crossobj.top=scroll_top-250+calunits
crossobj.visibility=(dom||ie)? "visible" : "show"
dropstart=setInterval("dropin()",50)
}

function dropin(){
scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
if (parseInt(crossobj.top)<lpos)
crossobj.top=parseInt(crossobj.top)+25+calunits
else{
clearInterval(dropstart)
bouncestart=setInterval("bouncein()",50)
}
}

function bouncein(){
crossobj.top=parseInt(crossobj.top)-bouncelimit+calunits
if (bouncelimit<0)
bouncelimit+=8
bouncelimit=bouncelimit*-1
if (bouncelimit==0){
clearInterval(bouncestart)
}
}

function dismissbox(){
if (window.bouncestart) clearInterval(bouncestart)
crossobj.visibility="hidden"
}

function truebody(){
return (document.compatMode!="BackCompat")? document.documentElement : document.body
}
function delay(x)
{
	var d=new Date()
	d=d.getSeconds()+x
	if (d>=60) d=d-60
	while (true)
	{
		var d1=new Date()
		if(d==d1.getSeconds())
			break;
	}	
}
function SetCooKie(name,value)
{
	document.cookie=name + "=" +escape(value);

}
function GetCookie(name)
{	
	var arg=name + "=" 
	var alen=arg.length
	var clen=document.cookie.length
	var i=0
	var conqCookie = document.cookie

	while(i<clen)
	{
		var j=i+alen
		if (document.cookie.substring(i,j)==arg)
		{	
			return true;
		}
		i=i+1;
		if ( i==0) break;
	}
	return false;
}
function Delaynew()
{
	if (!ns4)
	{	
		document.getElementById("dropin").style.visibility="visible";
			
	}	
	else
		document.dropin.visibility="show";
	
	return;
}






var lastx;
lastx = 0;

var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMousePosition;

function getMousePosition(mp) {

  var _x;
  var _y;
  if (!isIE) {
	_x = mp.pageX;
	_y = mp.clientY;
	

  }
  if (isIE) {
	_x = event.clientX;
	_y = event.clientY;
  }
  

    if ( _y <= 50 && _y < lastx && _x < 340 ) {
     
	 if (document.getElementById("Div_POP_s")!=null) {      
	  window.scroll(0,0);
	  showbox('Div_POP');
	  
		}
  }
  else {
  lastx = _y;
  }
  
  
  

  return true;
}




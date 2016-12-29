var igrac={ "name":"Ime", "difficult":"Dimenzija","difficult_name":"Tezina", "vreme":"Prolazno vreme", "pokusaji":"Broj pokusaja", "datum":"Datum" }
if(localStorage.getItem("Lista4")===null)
{	var lista = [];
	lista.push(igrac)
	localStorage.setItem("Lista4", JSON.stringify(lista));
}
var S=0;
var igrac={ "name":"Ime", "difficult":"Dimenzija","difficult_name":"Tezina", "vreme":"Prolazno vreme", "pokusaji":"Broj pokusaja", "datum":"Datum" }
var lista = JSON.parse(localStorage.getItem("Lista4"));
var brojac_pokusaja=0;
var brojac_pogodaka=0;
sortiranje()
var start= $('<button id="start" >Start</button >')
var tangLista= $('<button id="tangLista" >Lista</button >')
var pocetB= $('<button id="pocetB" >Pocetna stranica</button >')
var  x=$('#pocetna').css("display");
var easyNiz=[];
var mediumNiz=[];
var hardNiz=[];
var forma=$('<forma id="forma"  ></fotma>')
$('#pocetna').append('<h3>Ime: </h3>')
$('#pocetna').append('<input type="text" id="name"  val="" ><br>')
$('#pocetna').append('<h3>Tezina: </h3>')
$('#pocetna').append(forma) 
$('#forma').append(' <input  type="radio" name="gender" att_name="Easy" value="4" checked>Easy<br>')
$('#forma').append(' <input type="radio" name="gender" att_name="Medium" value="6">Medium <br>')
$('#forma').append(' <input type="radio" name="gender" att_name="Hard" value="8" >Hard <br>')
$('#buttonSS').append(start)
$('#buttonSS').append(tangLista)
$('#buttonSS').append(pocetB)
$('#start').on('click', show)
$('#tangLista').on('click', show)
$('#pocetB').on('click', show)
$('#easyB').on('click', showrang)
$('#mediumB').on('click', showrang)
$('#hardB').on('click', showrang)
var  time_start=0;
$('#start').on('click', function(){
brojac_pokusaja=0;
brojac_pogodaka=0;
$("#pokussaj").append('Pokusaji:' +brojac_pokusaja)
time_start=Date.now()
$('#igra').empty()
igrac.difficult_name=$( "input:checked" ).attr('att_name')
$("#tezina").empty()
$("#tezina").append('Tezina:' +igrac.difficult_name)
igrac.name= $('#name').val();
if(igrac.name===''){
igrac.name="NN"	
}
igrac.difficult=$( "input:checked" ).val();;
igra(parseInt(igrac.difficult))
});
function vreme(){ 
	var t=Date.now();
	var d = new Date((t-time_start));
var m = d.getMinutes();
var s = d.getSeconds()
$("#time").empty();                       
$("#time").append("Vreme: "+m+":"+s)
}
var vreme_inrervla;
function igra(difficulet){
 vreme_inrervla= setInterval(vreme,1000);
	var slika=[]
	var niz=[];
	for (var i=0 ; i < (difficulet*difficulet); i++) {
		niz.push(i)
	}
	var x= niz.sort(function() {return .5 - Math.random();});
	
	var  cont=1;
	for (var i = 0; i < (difficulet*difficulet); i++) {
		if((i)%2==0)
			{cont++;}
slika[i]=$("<div class='flip-container'  style=' width:"+((100/(difficulet))-0.01)+"%; height:"+((100/(difficulet))-0.01)+"%;'     ><div  attr='slika"+cont+"' id='img"+i+"' class='card'  >    <div class='front'></div>    <div class='back' style='background-image: url(img/img"+cont+".jpg);'      ></div></div> </div>")
}
for (var i = 0; i < (difficulet*difficulet); i++) {
	$('#igra').append(slika[x[i]])
}
var element='';
var prva_slika_id;
var druga_slika_id;
var prva_slika_attr;
var druga_slika_attr;
$('.card').on('click', function(){
if(S!=2)
{
element=$(this) 
Img(element,S)  
}
})
}
function modalBox(brojac_pokusaja){
	$('#modalTekst').empty()
$('#modalTekst').append('<h1>Memory games<h1>')
$('#modalTekst').append('<h2>Tezina: '+igrac.difficult_name+'<h1>')
$('#modalTekst').append('<h3>Ime:'+igrac.name +'<h1>')
$('#modalTekst').append('<h3>Vreme:'+vremeString(igrac.vreme) +'<h1>')
$('#modalTekst').append('<h3>Broj pokusaja:'+brojac_pokusaja +'</h1>')
$('#modalTekst').append('<span  class="buttonShare" ><a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=Memory%20games%0ATezina:%20'+igrac.difficult_name+'%0AVreme:%20'+vremeString(igrac.vreme)+'%0ABroj pokusaja:%20'+igrac.pokusaji+'"><img src="http://www.statisticbrain.com/wp-content/uploads/2015/10/twitter-company-statistics.jpg" style=" width: 80px; height:auto " alt=""></a><span>')
$('#modalTekst').append('<div class="buttonShare" class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/dialog/feed?app_id=145634995501895&display=popup&amp;caption=An%20example%20caption&link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https://developers.facebook.com/tools/explorer&caption='+igrac.difficult_name+'&description=Pokusaji:' +igrac.pokusaji+ '%0AVreme:'+vremeString(igrac.vreme)+'&title=Memory games&picture=http://www.marthas-vineyard-vacation-tips.com/images/free_memory_games.jpg"><img src="https://i.stack.imgur.com/br4Br.png" style="width:80px; height:auto  "  /></a></div>')
$('#myModal').css('display' , "block");
$(".close").click(function() {
    $('#myModal').css('display' , "none");
})
$( "body" ).click(function(event) {
    if (event.target.id==='myModal') {
        $('#myModal').css('display' , "none");
    }
})
}
function Img(element){
if(  S===0 ){
prva_slika_id=element.attr("id")
prva_slika_attr=element.attr("attr")
element.toggleClass('flipped')
S=1;
} 
else {
	S=2;
druga_slika_id=element.attr("id")
druga_slika_attr=element.attr("attr")
element.toggleClass('flipped')
provera()
}
 }
function provera(){
if(prva_slika_attr===druga_slika_attr && druga_slika_id!=prva_slika_id){
setTimeout(fadeOut,1100)
druga_slika_attr=''
prva_slika_attr=''
}
else{ 
setTimeout(nazad,1100)
}
}
function nazad(){
$("[id="+prva_slika_id+"]").toggleClass('flipped')
$("[id="+druga_slika_id+"]").toggleClass('flipped')
S=0;
if (prva_slika_id!=druga_slika_id) {
				brojac_pokusaja++;
				$("#pokussaj").empty()
				$("#pokussaj").append( 'Pokusaji:' +brojac_pokusaja)
}
}
function fadeOut(){
$("[id="+prva_slika_id+"]").fadeOut("slow")
$("[id="+druga_slika_id+"]").fadeOut("slow")
S=0;
brojac_pogodaka++;
brojac_pokusaja++;
$("#pokussaj").empty()
$("#pokussaj").append('Pokusaji:' +brojac_pokusaja)
var difficulet=parseInt(igrac.difficult); 
if((difficulet*difficulet)/2===brojac_pogodaka)
{
var time_end=Date.now()
timer(time_end,time_start)
igrac.pokusaji=brojac_pokusaja;
			 upisPodatakaULokalnuPromennjivu()
			modalBox(brojac_pokusaja)
			  setInt()
}
 }
function setInt(){
	  clearInterval(vreme_inrervla);
			   $('#time').empty()
			   $("#pokussaj").empty()
               $("#tezina").empty()
}
function anim() {$('.card').toggleClass('flipped')
S=0;	
}
function upisPodatakaULokalnuPromennjivu(){			
			lista.push(igrac);
			sortiranje()
			localStorage.setItem("Lista4", JSON.stringify(lista));
			lista = JSON.parse(localStorage.getItem("Lista4"));
show('show')	
	}

function sortiranje(){
$("#pokussaj").empty()
easyNiz=[];
mediumNiz=[];
hardNiz=[];
				for (var i = 1; i < lista.length; i++) {
                if(lista[i].difficult_name==="Hard"){
                  hardNiz.push(lista[i])
                }
                else if(lista[i].difficult_name==="Medium"){
                  mediumNiz.push(lista[i])
                }
                  else{
                    easyNiz.push(lista[i])
                    
                 }
                }
var hard=$('#hard')
var medium=$('#medium')
var easy=$('#easy')
 sortt(hardNiz, hard); 
 sortt(mediumNiz, medium);
 sortt(easyNiz, easy);
}
function sortt(lista, mesto){
  
var a= lista.sort(function (x, y) {
    var n = x.pokusaji - y.pokusaji;
    if (n != 0) {
        return n;
    }
    return x.vreme - y.vreme;
});
  var c=[]
  for (var i = 0; i < a.length; i++) {
  if(i<10){
    c.push(a[i])
  }
  }
  displ(c,mesto)
}

function displ(lista,mesto){
mesto.empty()
				for (var i = 0; i < lista.length; i++) {
mesto.append('<span class="span"> '+(i+1)+' </span><span class="span" >'+lista[i].name+' </span><span class="span" > '+lista[i].pokusaji+' </span><span class="span" > '+vremeString(lista[i].vreme)+' </span><span class="span" > '+lista[i].datum+ ' </span> <br>')	
}
mesto.append('<hr>')
}
function show(lista){
$('#pocetna').css( "display","none"  );
$('#rang').css( "display","none" );
$('#igra').css( "display","none" );
$('#pocetB').css( "display","block" );
$('#start').css( "display","block" );
$('#tangLista').css( "display","block" );
 var buttton=$(this).attr('id')
 if(lista==='show')
 {
$('#tangLista').css( "display","none" );
$('#start').css( "display","none" );
$('#rang').css( "display", "block" );
$('#easyB').css( "background-color", "rgb(150,150,150)" );
$('#mediumB').css( "background-color", "rgb(200,200,200)" );
$('#hardB').css( "background-color", "rgb(200,200,200)" );
 }
switch(buttton) {
    case "start":
        $('#igra').css( "display", "block" );
        $('#tangLista').css( "display","none" );
        $('#start').css( "display","none" );
        setInt()
        break;
    case "tangLista":
        $('#tangLista').css( "display","none" );
$('#start').css( "display","none" );
        $('#rang').css( "display", "block" );
   $('#easyB').css( "background-color", "rgb(150,150,150)" );
   $('#mediumB').css( "background-color", "rgb(200,200,200)" );
$('#hardB').css( "background-color", "rgb(200,200,200)" );
        setInt()
        break;
    case "pocetB":
        $('#pocetB').css( "display","none" );
        $('#pocetna').css( { "display":"inline-block"  });
        setInt()

        break;
    default:
         break;
}

 }
function showrang(){
$('#easy').css( "display","none"  );
$('#medium').css( "display","none" );
$('#hard').css( "display","none" );
$('#easyB').css( "background-color", "rgb(200,200,200)" );
$('#mediumB').css( "background-color", "rgb(200,200,200)" );
$('#hardB').css( "background-color", "rgb(200,200,200)" );

 var buttton=$(this).attr('id')
switch(buttton) {
    case "easyB":
        $('#easy').css( "display", "block" );
        $('#easyB').css( "background-color", "rgb(150,150,150)" );
        break;
    case "mediumB":
        
        $('#medium').css( "display", "block" );
    $('#mediumB').css( "background-color", "rgb(150,150,150)" );
        break;
    case "hardB":
       
        $('#hard').css( { "display":"block"  });
       $('#hardB').css( "background-color", "rgb(150,150,150)" );
        break;
    default:
         break;
}
 }
function timer(a,b){
var monthNames = [
"Jan.", "Feb.", "Mar","Apr","May" ,"June","July","Aug","Sept","Oct","Nov","Dec"];
var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
igrac.datum = day + '.' + monthNames[monthIndex];
var d = new Date((a-b));
var m = d.getMinutes();
var s = d.getSeconds()
igrac.vreme=d;
$("#time").empty();                       
$("#time").append("<span class='span' >Vreme:"+m+" : "+s+"<span>")
 }
function vremeString(d){
var date = new Date(d);
var m = date.getMinutes();
var s = date.getSeconds()
return m+':'+s;
}

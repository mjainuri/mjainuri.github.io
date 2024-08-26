function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68SoL0WGITB":
        Script1();
        break;
      case "5qkFNIl2lpT":
        Script2();
        break;
      case "5xe69aRSY07":
        Script3();
        break;
      case "65On1Rnm8Od":
        Script4();
        break;
      case "5XbDHIcs36Y":
        Script5();
        break;
      case "5hNhb3cRGkv":
        Script6();
        break;
      case "5knCmYgyPik":
        Script7();
        break;
      case "5YMfsWfFFWx":
        Script8();
        break;
      case "6JibL7LVgXe":
        Script9();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}


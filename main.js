var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="tirando sua selfie em cinco segundos";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save();

    },5000)
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takeSelfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfieImage">';
    })
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfieImage").src;
    link.href=image;
    link.click();
}
var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var Obj="";
function new_image(){
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
		Obj=Img;
		Obj.scaleToWidth(788);
		Obj.scaleToHeight(940);
		Obj.set({
		  top:0,
		  left:0
		});
		canvas.add(Obj);
	 });
}

function playSound(){
	x.play()
}

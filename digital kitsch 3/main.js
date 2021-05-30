const myCanv = document.getElementById('canvas');
const ctx = myCanv.getContext('2d');

myCanv.width = window.innerWidth;
myCanv.height = window.innerHeight;

let audioRB = new Audio();
audioRB.src = 'love.mp3';
function disp_alert()
{
alert("Hello silly man!" + "\n" + "But ... just press anywhere you want" + "\n" + "and enjoy the real nation song of the 100% world 🏳️‍🌈")
audioRB.play();
}

let audioE = new Audio();
audioE.src = 'animal.mp3';
//audioCR.muted = 'true';
//audioCR.play();
let toggleAudio = false;
document.addEventListener('mousedown', function()
{
  let pointsX = [];
  let pointsY = [];
  ctx.fillStyle = 'rgb(247, 74, 36)';
  ctx.fillRect(event.clientX, event.clientY, 20,20);

  pointsX.push(event.clientX);
  pointsY.push(event.clientY);

  // ctx.fillStyle = 'rgb(247, 74, 36)';
  // ctx.fillRect(event.clientX, event.clientY, 20,20);
  //
  // pointsX.push(event.clientX);
  // pointsY.push(event.clientY);
  //
  // ctx.lineWidth = 5;
  // ctx.strokeStyle = 'rgb(51, 50, 126)';


  ctx.lineWidth = 5;
  ctx.strokeStyle = 'rgb(51, 50, 126)';
  console.log(toggleAudio);
  audioE.volume = 0.3;
  if(toggleAudio) audioE.play();
  else if(!toggleAudio) {
    audioE.pause();
}
toggleAudio = !toggleAudio;
hacking();




// //彩虹旗上的交互
// var num8 = 0;
// document.addEventListener('onmouseover',function(){
// num8 = num8 + 1;
// console.log(num8);
// if(event.clientX > 105 && event.clientX < 425 && event.clientY > 200 && event.clientY < 400){
//   if (num8 % 2 == 1 ){
// hacking2();
//   }
// else{
// drawImage(lgbtq);
// }
// };
//
// })


//rainbow audio//
// let audioRB = new Audio();
// audioRB.src = 'love.mp3';
// document.addEventListener('mousedown',function(){
//
// }


// document.addEventListener("mousemove",function(e){
//   var body = document.querySelector('body');
//   var flag = document.createElement("span");
//   var x = e.offsetX;
//   var y = e.offsetY;
//   flag.style.left = x+'px';
//   flag.style.top = y+'px';
//   var size = Math.random()*100;
//   flag.style.width = 20+size+'px';
//   flag.style.height = 20+size+'px';
//   // var size = Math.random()*100;
//   // flag.style.width = 20+ size+'px';
//   // flag.style.height = 20+ size+'px';
//   body.appendChild(flag);
//
//   setTimeout(function(){
//     flag.remove();
//
//   }2000);
// })




let img = document.createElement('img');
img.src = 'spritetrump.png';
img.addEventListener('load', function() {

  let cols = 6; // 列数
  let rows = 4; // 行数
  let spriteW = 100; // 600除以6
  let spriteH = 100; // 400除以4

  let currentFrame = 0,
    currentCol = 0,
    currentRow = 0;


    setInterval(function() {
      ctx.fillStyle = bgColor;
      ctx.clearRect(0,0,spriteW*3,spriteH*3); //每一次循环完都清除掉之前的轨迹
      ctx.fillRect(0,0,spriteW*3,spriteH*3);

      ctx.drawImage(img,
        spriteW * currentCol, spriteH * currentRow, spriteW, spriteH,
        0, 0, spriteW*3, spriteH*3);
      currentFrame = (currentFrame + 1) % (rows * cols);
      currentCol = currentFrame % cols;


      currentRow = (currentFrame - currentCol) / cols;

    }, 2000); //能跟着音乐的旋律一起动不哥？
  });




  const bgColor = 'yellow';
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 800, 800);

  var img2 = new Image();
  img2.onload = start;
  img2.src = 'fortrump.png';

  var img3 = new Image();
  img3.onload = start;
  img3.src = 'banana.png';

  var img4 = new Image();
  img4.onload = start;
  img4.src = 'forfruits.png';

  var img5 = new Image();
  img5.onload = start;
  img5.src = 'vegetable.png';

  var img6 = new Image();
  img6.onload = start;
  img6.src = 'forveg.png';

  var img7 = new Image();
  img7.onload = start;
  img7.src = 'forveg2.png'

  var img9 = new Image();
  img9.onload = start;
  img9.src = 'supreme.jpg'

  var img10 = new Image();
  img10.onload = start;
  img10.src = 'oreo.png'

  var img11 = new Image();
  img11.onload = start;
  img11.src = 'hell.png'

  var imgCount=9;
  function start() {
    if(--imgCount > 0) return;
    //让所有图片能够同时加载出来

  ctx.drawImage(img2,47,300,214.7,110.1);
  ctx.drawImage(img3,400,30,663,500);
  ctx.drawImage(img4,690,80,428,220);
  ctx.drawImage(img5,600,200);
  ctx.drawImage(img6,1000,500,400,300);
  ctx.drawImage(img7,600,450,400,250);
  ctx.drawImage(img9,50,430,400,280);
  ctx.drawImage(img10,200,400,322,467);
  ctx.drawImage(img11,200,400,250,130);


  }

}
)

// const bgColor = 'yellow';
// ctx.fillStyle = bgColor;
// ctx.fillRect(0, 0, 800, 800);
//
// var img2 = new Image();
// img2.onload = start;
// img2.src = 'fortrump.png';
//
// var img3 = new Image();
// img3.onload = start;
// img3.src = 'banana.png';
//
// var img4 = new Image();
// img4.onload = start;
// img4.src = 'forfruits.png';
//
// var img5 = new Image();
// img5.onload = start;
// img5.src = 'vegetable.png';
//
// var img6 = new Image();
// img6.onload = start;
// img6.src = 'forveg.png';
//
// var img7 = new Image();
// img7.onload = start;
// img7.src = 'forveg2.png'
//
// var img9 = new Image();
// img9.onload = start;
// img9.src = 'supreme.jpg'
//
// var img10 = new Image();
// img10.onload = start;
// img10.src = 'oreo.png'
//
// var img11 = new Image();
// img11.onload = start;
// img11.src = 'hell.png'
//
// var imgCount=9;
// function start() {
//   if(--imgCount > 0) return;
//   //让所有图片能够同时加载出来
//
// hacking();
// ctx.drawImage(img2,47,300,214.7,110.1);
// ctx.drawImage(img3,400,30,663,500);
// ctx.drawImage(img4,690,80,428,220);
// ctx.drawImage(img5,600,200);
// ctx.drawImage(img6,1000,500,400,300);
// ctx.drawImage(img7,600,450,400,250);
// ctx.drawImage(img9,50,430,400,280);
// ctx.drawImage(img10,200,400,322,467);
// ctx.drawImage(img11,270,380,214,110);
//
//
// }


// window.onload = hacking;
function hacking(){
	var c = document.getElementById("canvas");
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	var letraTam=30;
	var columnas=c.width/letraTam;

	var Texto="富强";
	Texto=Texto.split("");
	var Texto2="民主";
	Texto2=Texto2.split("");
  var Texto3="文明";
  Texto3=Texto3.split("");
  var Texto4="和谐";
  Texto4=Texto4.split("");

	var letras=[];
	for(var i=0; i<columnas;i++){
		letras[i]=1;
	}
	contexto= c.getContext('2d');

	function dibujar(){
		contexto.fillStyle="rgba(0,0,0,0.05)";
		contexto.fillRect(0,0,c.width,c.height);
		contexto.fillStyle= "#ff0";
		contexto.font= letraTam+"px arial";

		for(var i=0;i<letras.length;i++){
			text=Texto;
			text2=Texto2;
      // text3=Texto3;
      //       text3=Texto3;
			if(i%3==1){contexto.fillText(text,i*letraTam, letras[i]*letraTam);
			}else{
				contexto.fillText(text2,i*letraTam, letras[i]*letraTam);
			}
      // if(i%3==2){contexto.fillText(text3,i*letraTam, letras[i]*letraTam);
      // }else{
      //   contexto.fillText(text4,i*letraTam, letras[i]*letraTam);
      // }
			if(letras[i]*letraTam > c.height && Math.random()>0.5){
				letras[i]=0;
			}
			letras[i]++;

		}

	}
	setInterval(dibujar,1000);
}

// setInterval(function(){
//   ctx.fillStyle = 'rgba(42, 252, 78,0.2)';
//   ctx.fillRect(0,0, canvas.width, canvas.height)
// },100)
//
// let pointsX = [];
// let pointsY = [];
canvas.onmousedown = function(){

 ctx.fillStyle = 'rgb(247, 74, 36)';
 ctx.fillRect(event.clientX, event.clientY, 20,20);

 pointsX.push(event.clientX);
 pointsY.push(event.clientY);

 ctx.lineWidth = 5;
 ctx.strokeStyle = 'rgb(51, 50, 126)';
}

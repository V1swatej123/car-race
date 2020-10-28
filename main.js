var canvas = document.getElementById('myCanvas'); 
var ctx = canvas.getContext("2d"); 
var car_width = 160; 
var car_height = 90; 
var background_image = "racing.jpg"; 
var car1_image = "car1.png";
var car2_image = "car1.png"; 
var car1_x = 10; car1_y = 10;
var car2_x = 10; car2_y = 120; 

function add() { 
     background_imgTag = new Image();
      background_imgTag.onload = uploadBackground; 
      background_imgTag.src = background_image; 
      car_imgTag = new Image();  
      car_imgTag.onload = uploadimage; 
      car_imgTag.src = car2_image;
      car2_imgTag = new Image();  
      car2_imgTag.onload = uploadimage2; 
      car2_imgTag.src = car2_image;
}

function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 
function uploadimage() { 
    ctx.drawImage(car2_imgTag, car1_x, car1_y, car_width, car_height);
}

function uploadimage2(){
  ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);
}

window.addEventListener("keydown", pressed);

function pressed(e) {
   var key = e.keyCode;
   console.log(key);

   if ( key == 38 ) {
       console.log("up");
       up();
   }
   if ( key == 40 ) {
    console.log("down");
    down();
  }
  if ( key == 37 ) {
    console.log("left");
    left();
  }
  if ( key == 39 ) {
    console.log("right");
    right();
  }
  if ( key == 87 ) {
    console.log("W");
    w();
  }
  if ( key == 65 ) {
    console.log("A");
    a();
  }
  if ( key == 83 ) {
    console.log("S");
    s();
  }
  if ( key == 68 ) {
    console.log("D");
    d();
  }
}

function up(){
  if ( car1_y >= 0 ){
    car1_y = car1_y - 10;
    uploadBackground();
    uploadimage();
    uploadimage2();
    check();
    check2();
  }
}
function down(){
  if ( car1_y <= 500 ){
    car1_y = car1_y + 10;
    uploadBackground();
    uploadimage();
    uploadimage2();
    check();
    check2();
  }
}

function left(){
  if ( car1_x >= 0 ){
    car1_x = car1_x - 10;
    uploadBackground();
    uploadimage();
    uploadimage2();
    check();
    check2();
  }
}

function right(){
  if ( car1_x < 700 ){
    car1_x = car1_x + 10;
    uploadBackground();
    uploadimage2();
    uploadimage();
    check();
    check2();
  }
}

function w() {
  if ( car2_y > 0 ){
    car2_y = car2_y - 10;
    uploadBackground();
    uploadimage2();
    uploadimage();
    check();
    check2();
  }
}

function a() {
  if ( car2_x >= 0 ){
    car2_x = car2_x - 10;
    uploadBackground();
    uploadimage();
    uploadimage2();
    check();
    check2();
  }
}

function s(){
  if ( car2_y <= 500 ){
    car2_y = car2_y + 10;
    uploadBackground();
    uploadimage();
    uploadimage2();
    check();
    check2();
  }
}

function d(){
  if ( car2_x < 700 ){
    car2_x = car2_x + 10;
    uploadBackground();
    uploadimage2();
    uploadimage();
    check();
    check2();
  }
}

function check(){
  if (car1_x < 700 ){
  }else{
    document.getElementById("status").innerText = "CAR 1 WON!";
    console.log("car1 won");
  }
}

function check2() {
  if (car2_x >= 700){
    document.getElementById("status").innerText = "Car 2 WON!";
    console.log("car2 won");
  }else{

  }
}
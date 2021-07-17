canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 100;
var bg_img = "mars.jpg";
var rover_img = "rover.png";

function add() {
    bg_img_tag = new Image();
    bg_img_tag.onload = upload_bg;
    bg_img_tag.src = bg_img;

    rover_img_tag = new Image();
    rover_img_tag.onload = upload_rover;
    rover_img_tag.src = rover_img;

}

function upload_bg() {
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
console.log(e);
var key_pressed = e.keyCode;

if(key_pressed == '38') {
    up();
}

if(key_pressed == '40') {
    down();
}

if(key_pressed == '37') {
    left();
}

if(key_pressed == '39') {
    right();
}
}
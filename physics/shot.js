var canvas = document.querySelector("canvas");
canvas.width = 1050;
canvas.height = 700;
var c = canvas.getContext("2d");
function Vector2(x,y) {
    this.x = x;
    this.y = y;
    // dir = function(Vec1,Vec2){
    //     return new Vector2(Vec2.x - Vec1.x, Vec2.y - Vec1.y);
    // }
}
var background = {
    x: 0,
    y: 0,
    w: 1050,
    h: 700,
    color: "rgba(47,154,124,0.2)",
    draw: function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.rect(this.x, this.y, this.w, this.h);
        c.fill();
    },    
};
var player = {
    r: 50,
    Vect2 : new Vector2(canvas.width/2,canvas.height/2) ,
    g:1,
    Speed:0,
    friction:0.5,
    isFalling:true,
    color: "rgba(135,45,113,0.05)",
    draw: function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.Vect2.x,this.Vect2.y, this.r, 0, Math.PI * 2, false);
        c.fill();
    }
};
var bullet = {
    r: 10,
    Vect2: player.Vect2,
    g: 1,
    Speed: 0,
    friction: 0.5,
    isFalling: true,
    color: "rgba(213,45,123,1)",
    draw: function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.Vect2.x, this.Vect2.y, this.r, 0, Math.PI * 2, false);
        c.fill();
    },
    update:function(){
        this.draw();
        var direction = dir(player.Vect2,mouse.Vect2);
        this.Vect2.x += direction.x*0.02;
        this.Vect2.y += direction.y*0.02;
    }
};
var mouse = {
    Vect2 :new Vector2(0,0),
}
function dir(Vec1,Vec2){
    return new Vector2(Vec2.x-Vec1.x,Vec2.y-Vec1.y);
}
var isShooting = false;
// document.addEventListener("mousemove")
document.addEventListener("mousemove", (e) => {
    mouse.Vect2.x = e.clientX;
    mouse.Vect2.y = e.clientY;
    isShooting = true;
});
function animation() {
    requestAnimationFrame(animation);
    background.draw();
    player.draw();
    if(isShooting){
        bullet.update();
    }
}
animation();

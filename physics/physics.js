var canvas = document.querySelector("canvas");
canvas.width = 1050;
canvas.height = 700;
var c = canvas.getContext("2d");
var background = {
    x:0,
    y:0,
    w:1050,
    h:700,
    color:"rgb(47,154,124)",
    draw:function(){
        c.beginPath();
        c.fillStyle = this.color;
        c.rect(this.x,this.y,this.w,this.h);
        c.fill();
    }
}
var foreground = {
    x: 0,
    y: 700-100,
    w: 1050,
    h: 100,
    color: "rgb(47,114,163)",
    draw: function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.rect(this.x, this.y, this.w, this.h);
        c.fill();
    }
}
var player = {
    r: 20,
    x: 545,
    y: 100,
    g:1,
    Speed:0,
    friction:0.5,
    isFalling:true,
    color: "rgb(135,45,113)",
    draw: function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r,0,Math.PI*2,false);
        c.fill();
    },
    physics : function () {
        this.draw();
        if(this.y+this.r>=foreground.y){
            this.y = foreground.y - this.r;
            this.Speed = -this.Speed;
            this.Speed *= this.friction;
        }
        else{
            this.Speed += this.g;
        }
        this.y+= this.Speed;
        console.log(this.Speed);
    }
        
}
// setInterval(()=>{
//     background.draw();
//     foreground.draw();
//     player.physics();
// }
// ,200)

function animation(){
    requestAnimationFrame(animation);
    background.draw();
    foreground.draw();
    player.physics();
}
animation();
function setup(){
	createCanvas(600, 600);
}
function draw(){
    background(0);
    let hrs = hour();
    let min = minute();
    let sec = second();

    fill(255);
    noStroke() 
    textSize(100);
    text(hrs+":"+min+":"+sec,140,590);
 
    let c = color(min*2,min*5,min*7);
    fill(c);
    noStroke();
    circle(300, 300, min*6);

    let a = color(hrs*2,hrs*5,hrs*7);
    fill(a);
    noStroke();
    circle(130, 300, hrs*15);
          
    let b = color(sec*2,sec*5,sec*7);      
    fill(b);
    noStroke();
    circle(470, 300, sec*6);


}
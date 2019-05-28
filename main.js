function setup(){
	createCanvas(600,600);
}
function draw(){
		background(0);
		let hrs = hour();
		let sec = second();
		let min = minute();
		

		textSize(35);
		fill(255);
		text(hrs+":"+min+":"+sec,245,550);
        
        textSize(sec+10);
		text(sec,sec*6,300);
		text(sec,300,sec*6);
		text(sec,600-sec*6,300);
		
        ellipse(sec,sec,300,300);
        ellipse(600-sec,600-sec,300,300);
        ellipse(sec,600-sec,300,300);
        ellipse(600-sec,sec,300,300);









	//let mx = mouseX;
	//let my = mouseY;
	//if(mouseIsPressed){
	//	fill(0);
	//}
	//else{
	//	noStrokek();
 	//	fill(255);
//}
//ellipse(mx,my,50,50);

}

function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	
    this.piNumber = false;
    
    this.color1 = false;
    this.color2 = false;
    this.color3 = false;
    this.color4 = false;
    this.color5 = false;
    this.color6 = false;
    this.color7 = false;
    this.color8 = false;
    this.color9 = false;
    this.color10 = false;
    this.color11 = false;
    
}

Cell.prototype.show = function() {
	
	
	if(!this.piNumber) {
        noStroke();
		
		
        
        if(this.color1){
            fill(64, 120, 211);
        }
        if(this.color2){
            
           fill(64, 120, 211);
        }
        if(this.color3){
            
            fill(64, 120, 211);
        }
        if(this.color4){
            
            fill(64, 120, 211);
        }
        if(this.color5){
            
            fill(64, 120, 211);
        }
        if(this.color6){
            
            fill(64, 120, 211);
        }
        if(this.color7){
            
            fill(64, 120, 211);
        }
        if(this.color8){
            fill(204, 255, 0);
            
        }
        if(this.color9){
            
            fill(64, 120, 211);
        }
        if(this.color10){
            
            fill(64, 120, 211);
        }
        if(this.color11){
            
            fill(184, 214, 4);
        }
        
		rect(this.x, this.y, this.w, this.w);
	}
	if (this.piNumber) {
        var d = floor(random(1,7));
        if(d == 2){
            fill(204,255,0);
            rect(this.x,this.y,this.w,this.w);
        }else{
                fill(0);
                rect(this.x, this.y, this.w, this.w);
        }
	}
}

Cell.prototype.piNumbered = function (x, y) {
	this.piNumber = true;
}



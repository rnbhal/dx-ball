function level1(){
    bool = 0;
    
  	no_of_bricks = 0;
    for(var j=0; j<8; j++)
    {	
    	for (var i = j+1; i <= 15-j; i++)
    	{
            no_of_bricks++;
        	if(i%2==0){
        		var brick = bricks_single.create(i * 60, (j*25) + 100, 'brick_blue');
    	    	brick.body.immovable = true;
    	    }
    	    else{
    	    	var brick = bricks_single.create(i * 60, (j*25) + 100, 'brick_green');
    	    	brick.body.immovable = true;
    	    }
    	}    
    }
    
    for(var k=2; k<15; k++)
    {
        no_of_bricks++;
    	var brick2 = bricks_golden.create(k * 60, 350, 'brick_d_golden');
    	brick2.body.immovable = true;
    }
}

function level2 () {
    bool = 0;
    no_of_bricks = 0;
    

    var brick = bricks_golden.create(600, 600, 'brick_d_golden');
    brick.body.immovable = true;
    
}

function level3 () {
    bool = 0;
    no_of_bricks = 0;
}
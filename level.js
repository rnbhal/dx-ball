function level1(){
    bool = 0;
    
  	no_of_bricks = 0;
    for(var j=0; j<8; j++)
    {	
    	for (var i = j+1; i <= 15-j; i++)
    	{
            no_of_bricks++;
        	if(i%2==0){
        		var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_blue');
    	    	brick.body.immovable = true;
    	    }
    	    else{
    	    	var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_green');
    	    	brick.body.immovable = true;
    	    }
    	}    
    }
    
    for(var k=2; k<15; k++)
    {
        no_of_bricks++;
    	var brick2 = bricks_golden.create(k * 60 - 10, 350, 'brick_d_golden');
    	brick2.body.immovable = true;
    }
}

function level2 () {
    bool = 0;
    no_of_bricks = 0;
    
    for(var j=0; j<10; j++)
    {   
        for (var i = 1; i <= 15; i++)
        {
            no_of_bricks++;
            if(j%2==0 && i%2==0){
                var brick = bricks_golden.create(i * 60 - 10, (j*25) + 100, 'brick_d_golden');
                brick.body.immovable = true;
            }
            else if (j%2==0){
                var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_yellow');
                brick.body.immovable = true;
            }
            else{
                var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_purple');
                brick.body.immovable = true;   
            }
        }    
    }

    for(var k=1; k<=15; k++){
        no_of_bricks++;
        
        var brick = bricks_black.create(k * 60 - 10, 350, 'brick_black');
        brick.body.immovable = true;   
        
    }
    
}

function level3 () {
    bool = 0;
    no_of_bricks = 0;
    var n = 12;
    var i=2;
    var k=1
    var col=0;
     while( k <= n * n ){
                var j = i;

                // four steps
                while( j < n - i ){             // 1. horizonal, left to right
                    //ret[i][j++] = k++;
                    if(col==0){
                        var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_blue');
                        brick.body.immovable = true;
                    }
                    else if(col==1){
                        var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_pink');
                        brick.body.immovable = true;   
                    }
                    else if(col==2){
                        var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_green');
                        brick.body.immovable = true;   
                    }
                    else if(col==3){
                        var brick = bricks_single.create(i * 60 - 10, (j*25) + 100, 'brick_yellow');
                        brick.body.immovable = true;   
                    }
                    else if(col==5){
                        var brick = bricks_black.create(i * 60 - 10, (j*25) + 100, 'brick_black');
                        brick.body.immovable = true;   
                    }
                    else if(col==1){
                        var brick = bricks_golden.create(i * 60 - 10, (j*25) + 100, 'brick_d_golden');
                        brick.body.immovable = true;   
                    }
                    no_of_bricks++;
                    j++;
                    k++;
                }
                j = i + 1;
                while( j < n - i ){             // 2. vertical, top to bottom
                    //ret[j++][n-i-1] = k++;
                    if(col==0){
                        var brick = bricks_single.create(j * 60 - 10, ((n-i-1)*25) + 100, 'brick_blue');
                        brick.body.immovable = true;
                    }
                    else if(col==1){
                        var brick = bricks_single.create(j * 60 - 10, ((n-i-1)*25) + 100, 'brick_pink');
                        brick.body.immovable = true;   
                    }
                    else if(col==2){
                        var brick = bricks_single.create(j * 60 - 10, ((n-i-1)*25) + 100, 'brick_green');
                        brick.body.immovable = true;   
                    }
                    else if(col==3){
                        var brick = bricks_single.create(j * 60 - 10, ((n-i-1)*25) + 100, 'brick_yellow');
                        brick.body.immovable = true;   
                    }
                    else if(col==5){
                        var brick = bricks_black.create(j * 60 - 10, ((n-i-1)*25) + 100, 'brick_black');
                        brick.body.immovable = true;   
                    }
                    else if(col==1){
                        var brick = bricks_golden.create(j * 60 - 10, ((n-i-1)*25) + 100, 'brick_d_golden');
                        brick.body.immovable = true;   
                    }
                    no_of_bricks++;
                    j++;
                    k++;
                }
                j = n - i - 2;
                while( j > i ){                  // 3. horizonal, right to left 
                    //ret[n-i-1][j--] = k++;
                    if(col==0){
                        var brick = bricks_single.create((n-i-1) * 60 - 10, (j*25) + 100, 'brick_blue');
                        brick.body.immovable = true;
                    }
                    else if(col==1){
                        var brick = bricks_single.create((n-i-1) * 60 - 10, (j*25) + 100, 'brick_pink');
                        brick.body.immovable = true;   
                    }
                    else if(col==2){
                        var brick = bricks_single.create((n-i-1) * 60 - 10, (j*25) + 100, 'brick_green');
                        brick.body.immovable = true;   
                    }
                    else if(col==3){
                        var brick = bricks_single.create((n-i-1) * 60 - 10, (j*25) + 100, 'brick_yellow');
                        brick.body.immovable = true;   
                    }
                    else if(col==5){
                        var brick = bricks_black.create((n-i-1) * 60 - 10, (j*25) + 100, 'brick_black');
                        brick.body.immovable = true;   
                    }
                    else if(col==1){
                        var brick = bricks_golden.create((n-i-1) * 60 - 10, (j*25) + 100, 'brick_d_golden');
                        brick.body.immovable = true;   
                    }
                    no_of_bricks++;
                    j--;
                    k++;
                }
                j = n - i - 1;
                while( j > i ){                  // 4. vertical, bottom to  top 
                    //ret[j--][i] = k++;
                    if(col==0){
                        var brick = bricks_single.create(j * 60 - 10, (i*25) + 100, 'brick_blue');
                        brick.body.immovable = true;
                    }
                    else if(col==1){
                        var brick = bricks_single.create(j * 60 - 10, (i*25) + 100, 'brick_pink');
                        brick.body.immovable = true;   
                    }
                    else if(col==2){
                        var brick = bricks_single.create(j * 60 - 10, (i*25) + 100, 'brick_green');
                        brick.body.immovable = true;   
                    }
                    else if(col==3){
                        var brick = bricks_single.create(j * 60 - 10, (i*25) + 100, 'brick_yellow');
                        brick.body.immovable = true;   
                    }
                    else if(col==5){
                        var brick = bricks_black.create(j * 60 - 10, (i*25) + 100, 'brick_black');
                        brick.body.immovable = true;   
                    }
                    else if(col==1){
                        var brick = bricks_golden.create(j * 60 - 10, (i*25) + 100, 'brick_d_golden');
                        brick.body.immovable = true;   
                    }
                    no_of_bricks++;
                    j--;
                    k++;
                }
                i++;      // next loop
    }


}
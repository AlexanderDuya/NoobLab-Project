function press()	  	   	      	   	       	     	    	
{	  	   	      	   	       	     	    	
  var option = document.getElementById(this.id);	  	   	      	   	       	     	    	
  if(option.textContent === "-")	  	   	      	   	       	     	    	
     {	  	   	      	   	       	     	    	
     option.textContent = pl;	  	   	      	   	       	     	    	
     changepl();	  	   	      	   	       	     	    	
}	  	   	      	   	       	     	    	
else	  	   	      	   	       	     	    	
{	  	   	      	   	       	     	    	
  option.textContent = option.textContent;	  	   	      	   	       	     	    	
}	  	   	      	   	       	     	    	
}	  	   	      	   	       	     	    	
for( var o = 1; o < 10; o++)	  	   	      	   	       	     	    	
    {	  	   	      	   	       	     	    	
    document.getElementById("cell"+o).onclick = press;	  	   	      	   	       	     	    	
    }	  	   	      	   	       	     	    	
	  	   	      	   	       	     	    	
var pl = "X";	  	   	      	   	       	     	    	
function changepl()	  	   	      	   	       	     	    	
{	  	   	      	   	       	     	    	
  pl = pl === "X" ? "O" : "X";	  	   	      	   	       	     	    	
}	  	   	      	   	       	     	    	

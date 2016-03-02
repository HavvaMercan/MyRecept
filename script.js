
    
    
    var personer =1;
var forsta = 12;
var andra = 50;
var tredje= 3;
var fjarde= 0.5;
var femte = 8;
var sjatte = 50;
var sjunde=2;
var attoende=0.5;






function plusClick() {
   
    if(personer<=8){
    personer =personer+1;
    forsta = forsta + 12; 
    andra = andra + 50; 
    tredje = tredje+ 3;
    fjarde = fjarde+ 0.5;
    femte = femte + 8;
    sjatte =sjatte+50;
    sjunde=sjunde+2;
    attoende=attoende+0.5;
		
  
      
        
    var f = document.getElementById("1");
    var a = document.getElementById("2");
    var t = document.getElementById("3");
    var fj= document.getElementById("4");
    var fe = document.getElementById("5");
    var s = document.getElementById("6");  
    var sj= document.getElementById("7"); 
    var at=document.getElementById("8"); 
		
   

    
    
    f.innerHTML = forsta;
    a.innerHTML = andra;
    t.innerHTML = tredje;
    fj.innerHTML = fjarde;
    fe.innerHTML = femte;
    s.innerHTML = sjatte;
    sj.innerHTML = sjunde;
    at.innerHTML = attoende;
		
	
    }

}

function minusClick()

{  
    
     if(personer>=1){
        
     personer =personer-1;
    forsta = forsta - 12; 
    andra = andra - 50; 
    tredje = tredje - 3;
   
    fjarde = fjarde - 0.5;
    femte = femte - 8;
    sjatte=sjatte -50;
    sjunde= sjunde -2;
    attoende=attoende-0.5;
         
		
 

        var f = document.getElementById("1");
        var a = document.getElementById("2");
        var t = document.getElementById("3");
        var fj = document.getElementById("4");
        var fe = document.getElementById("5");
        var s = document.getElementById("6");
         var sj = document.getElementById("7");
         var at = document.getElementById("8");
       
		 


    f.innerHTML = forsta;
    a.innerHTML = andra;
    t.innerHTML = tredje;
    fj.innerHTML =fjarde;
    fe.innerHTML = femte;
    s.innerHTML = sjatte;
    sj.innerHTML = sjunde;
     at.innerHTML  = attoende;

		 
		 

         
     }

}



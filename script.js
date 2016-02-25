<script>
    
    
    var personer =1;
var första = 12;
var andra = 50;
var tredje= 3;
var fjärde= 0.5;
var femte = 8;
var sjätte = 50;
var sjunde=2;
var åttoende=0.5;






function clickedButton() {
     
    
    if(personer<=8){
    personer =personer+1;
   första = fösrta + 12; 
    andra = andra + 50; 
    tredje = tredje+ 3;
   fjarde = fjarde+ 0.5;
    femte = femte + 8;
      sjatte =sjatte+50;
        sjunde=sjunde+2;
        attoende=attoende+0.5;
		
  
      
        
    // För att hämta en HTML-tagg i vår HTML-fil...
    var tP = document.getElementById("personer");
    var f = document.getElementById("1");
    var a = document.getElementById("2");
    var t = document.getElementById("3");
    var fjärde1 = document.getElementById("4");
    var femte1 = document.getElementById("5");
 var sjätte1 = document.getElementById("6");  
        var sjunde= document.getElementById("7"); 
        var åttoende=document.getElementById("8"); 
		
   

    
    
    // ...och ändra på innehållet mellan start- och slut-tagg:
   p.innerHTML = personer;
    f.innerHTML = första;
    s.innerHTML = andra;
    t.innerHTML = tredje;
    fjärde1.innerHTML = fjärde;
    femte.innerHTML = femte;
		sjätte1.innerHTML = sjätte;
        sjunde1.innerHTML = sjunde;
       åttoende1.innerHTML = åttoende;
		
	
    }

}

function clickedButton1() 
{
     if(personer>1){
     personer =personer-1;
    första = första - 12; 
    andra = andra - 50; 
    tredje = tredje - 3;
    personer =personer - 1;
    fjärde = fjärde - 0.5;
    femte = femte - 8;
    sjätte=sjätte -50;
    sjunde= sjunde -2;
    åttoende=åttoende-0;.5
         
		
 
		 

         
    
        var p = document.getElementById("personer");
        var f = document.getElementById("1");
        var a = document.getElementById("2");
        var t = document.getElementById("3");
        var fjärde1 = document.getElementById("4");
        var femte1 = document.getElementById("5");
        var sjätte1 = document.getElementById("6");
         var sjunde1 = document.getElementById("6");
         var åttoende1 = document.getElementById("7");
       
		 



   p.innerHTML = personer;
    f.innerHTML = första;
    a.innerHTML = andra;
    t.innerHTML = tredje;
   fjärde1.innerHTML =fjärde;
   femte1.innerHTML = femte;
   sjätte1.innerHTML = sjätte;
    sjunde1.innerHTML = sjunde;
         åttoende.innerHTML  = sjunde;

		 
		 

         
     }

}
$(function(){

			var kontrol=0;//kontrol değişkenimiz.tıklandıktan sonra renkler sıfırlanmasın diye



			$("#betyg i").mouseover(function(){//yıldızların üzerine mouse ile gelinirse

					var index=$(this).index();//üzerine gelinenin sayfadaki sırasını al.

					$("#betyg i").css("color","#000")//tüm yıldızları siyah yap

					

					for(i=index;i>=0;i--){//seçtiğimiz yıldız ve altındakileri döngüye alıyoruz.

						$("#betyg i:eq("+i+")").css("color","#15d4f5");//tek tek renklerini değiştiriyoruz.

					}

			})



			$("#betyg i").mouseout(function(){//yıldızların üzerinden mouse çekilirse

				if(kontrol==0){//kontrol 0 ise

					$("#betyg i").css("color","#000");//hepsini siyah yap

				}

			})



			$("#betyg i").click(function(){//yıldıza tıklanırsa

				var index=$(this).index()+1;//seçilen yıldız sayısını buluyoruz.

				kontrol=1;//kontrolü 1 yapıyoruz

				alert(index+" sätter betyg.");//yıldız sayısını ekrana bastırıyoruz.

			})

		})

	</script>

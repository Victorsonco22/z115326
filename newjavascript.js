 /* global Idioma */

            var vides=7;
            var Paraula=[];
            var lletres=["_","_","_","_","_","_","_"];
           
            //Llista de paraules
            var paraules=["cordes","fetje","forca","jutges","jutjat","menjen","menjat","quinta","forca"];
            var pistes=["A la quinta forca","A ca un penjat, no hi amoinis cordes","setze jutjes d'un jutjat, menjen fetge d'un penjat"];
            var paraulapistes=[1,2,0,2,2,2,1,0,2];
            
            //Escull una paraula aleatoriament
            var aleatori=Math.floor(Math.random()*paraules.length);
            var paraula=paraules[aleatori];
            var pista=pistes[paraules[aleatori]];
            
            //marcam cada lletra amb "_"
            for (var i=0;i<paraula.lenght;i++){
                 Paraula[i]="_";
         
            }
            
            
            
            
            function Comprovar(){
             var lletra= document.getElementById("valor").value;
             document.getElementById("valor").value="";
             lletra=lletra.toLowerCase();
             
             switch(lletra){
                case"á":
                case"à": 
                    lletra="a";
                    break;
                    
                 case"é":
                 case"è": 
                    lletra="e";
                    break;
                    
                 case"í":
                 case"ì": 
                    lletra="i";
                    break;
                    
                 case"ó":
                 case"ò": 
                    lletra="o";
                    break;
                    
                case"ú":
                case"ù": 
                    lletra="u";
                    break;
             }
             var pos= paraula.indexOf(lletra);
            if((pos !=-1) && (lletra !="")){
                 document.getElementById("miau").play();
                 //document.getElementById("disfraz3").hidden=true;
                 //document.getElementById("disfraz2").hidden=false;
                 //document.getElementById("disfraz1").hidden=true;
                 
                 for(var i=pos;i<paraula.lenght;i++){
                     if(paraula[i]==lletra){
                        Paraula[i]=lletra;
                     }
                    }
                  
            document.getElementById("paraula").innerHTML = Paraula;
            else if (((lletra>="a")&&(lletra<="z")))||
                      (lletra=="ñ")||(lletra=="-")||
                      (lletra=="ç")||(lletra=="")
              
              //Lletres.[7-vides]=lletra
               //document.getElementById("lletres").innerHTML = Lletres;
              
              
              
              
              
              
              
                alert("Has acertado");
              document.getElementById("lletres").innerHTML = 
                      document.getElementById("lletres").innerHTML + lletra;
            }
            else
            {
                alert("Has fallado");
                document.getElementById("dolentes").innerHTML = 
                      document.getElementById("dolentes").innerHTML + lletra;
                vides=vides-1;
                document.getElementById("vida").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+vides;
                dolentes=dolentes+ lletra;
             }
             
         if(vides<=0){
             window.alert("i has perdut!");  
             AturaTot();
         }
        
         else{
             if(paraula.lenght >=14){
                window.alert("i has gunyat");
                AturaTot();
             
          }
        
        
        }
        }
    function MostraImg(){ 
      switch (vides) {
        case 6: 
            document.getElementById("ahorcado_5").hidden=false; 
            document.getElementById("ahorcado_6").hidden=true;   
            break;
        case 5:
            document.getElementById("ahorcado_5").hidden=false; 
            document.getElementById("ahorcado_6").hidden=true;   
            break;
        case 4:
            document.getElementById("ahorcado_4").hidden=false; 
            document.getElementById("ahorcado_5").hidden=true;   
            break;
        case 3:
            document.getElementById("ahorcado_3").hidden=false; 
            document.getElementById("ahorcado_4").hidden=true;   
            break;    
        case 2:
            document.getElementById("ahorcado_2").hidden=false; 
            document.getElementById("ahorcado_3").hidden=true;   
            break;
        case 1:
            document.getElementById("ahorcado_1").hidden=false; 
            document.getElementById("ahorcado_2").hidden=true;   
            break;                     
}  
            
    }
    function Amaga(){
         document.getElementById("ahorcado_0").hidden=true;
         document.getElementById("ahorcado_1").hidden=true;
         document.getElementById("ahorcado_2").hidden=true;
         document.getElementById("ahorcado_3").hidden=true;
         document.getElementById("ahorcado_4").hidden=true;
         document.getElementById("ahorcado_5").hidden=true; 
         document.getElementById("ahorcado_6").hidden=false;    
     }  
            
    function AturaTot(){
           document.getElementById("valor").disabled=true; 
         document.getElementById("Comprovar").disabled=true;
    }  
    }    

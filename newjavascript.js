  var vides=7
           
            
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
            if((lletra>="a")&&(lletra<="m"))
             {   
                Alert("Has acertado");
              document.getElementById("lletres").innerHTML = 
                      document.getElementById("lletres").innerHTML + lletra;
            }
            else
            {
                Alert("Has fallado");
                document.getElementById("dolentes").innerHTML = 
                      document.getElementById("dolentes").innerHTML + lletra;
                vides=vides-1;
                document.getElementById("vida").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+vides
                 dolentes=dolentes+lletra;
             }
             
             //comprova si has perdut! o has guanyat!
         if(vides<=0){
             window.alert("i has perdut!");  
             AturaTot();
         }
        
         else{
             if(paraula.lenght >=14){
                window.alert("i has gunyat");
                AturaTot();
             
          }
        MostraImg();
        document.getElementById().play;
        
        
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

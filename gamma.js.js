/* global Idioma, TblTextosGUI */



           
             const Idiomes_dft=[];
             var Idiomes=Idiomes_dft;
             
             function Canviaridioma(IdIdioma){
                if((IdIdioma!="ca")&&(IdIdioma!="es")){
             }
             alaWeb_SQLite(IdIdioma);
             Idioma=Idiomes.fin(Idioma=>Idioma.Ididioma==IdIdioma);
             
             
             
          
             var vides=7;
             var Paraula=[];
             var lletres=["_","_","_","_","_","_","_"];
           
            //Llista de paraules
            var paraules=["cordes","fetje","forca","jutges","jutjat","menjen","menjat","quinta","forca"];
            var pistes=["A la quinta forca","A ca un penjat, no hi amoinis cordes","setze jutjes d'un jutjat, menjen fetge d'un penjat"];
            var paraulapistes=[1,2,0,2,2,2,1,0,2];
            
            //Escull una paraula aleatoriament
            var aleatori=Math.floor(Math.random()*paraules.length);
            var Paraula=paraules[aleatori];
            var pista=pistes[paraules[aleatori]];
            
            //marcam cada lletra amb "_"
            for (var i=0;i<paraula.lenght,i++){
                 Paraula[i]="-";
         
            }
            
        
                // Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
    const Taula_dft = [
        // Deixam per defecte les paraules i pistes en Català
        {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "fetge", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "forca", "Pista": "A la quinta forca"},
        {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "quinta", "Pista": "A la quinta forca"},
        {"Paraula": "setze", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
    ];
    var Taula = Taula_dft;
    
     // Diferents idiomes per la GUI
    const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Base de Dades Joc del Penjat",
            "Versio": "Versió γ Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Base de Datos Juego del Ahorcado",
            "Versio": "Versión γ Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Database Version",
            "Versio": "Hangman Game γ Versión",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        }
    ]
    var Idiomes = Idiomes_dft;
            
            
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
                 document.getElementById("disfraz3").hidden=true;
                 document.getElementById("disfraz2").hidden=false;
                 document.getElementById("disfraz1").hidden=true;
                 window.alert(Idioma.Encertat);
                 
                 for(var i=pos;i<paraula.lenght;i++){
                     if(paraula[i]==lletra){
                        Paraula[i]=lletra;
                     }
                    }
                  
                 
                
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

        function CanviarIdioma(IdIdioma){
            alert("CanviarIdioma");
            if((IdIdioma !="ca")&&(IdIdioma !="es")){
                document.getElemntById("Idiomes").value=IdIdioma;
            }
        
        
        AlaWeb_SQLite(IdIdioma);
        Idioma=Idiomes.find(Idioma=>Idioma.IdIdioma==IdIdioma);
        
        document.title=Idioma.Titol;
        document.getElemntById("Versio").innerHTML=Idioma.Versio;
        document.getElemntById("lletra").placeholder=Idioma.Input;
        document.getElemntById("comprovar").innerHTML=Idioma.Comprovar;
    }

    // Funció per carregar la base de dades penjat.db
    function AlaWeb_SQLite(IdIdioma) {
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        config = {
            locateFile: filename => `/dist/${filename}`
        };

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
            [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
            //[], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        );

        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT Paraula,Pista \n\ \n\
                FROM TblParaules INNER JOIN TblPistes \n\
                    ON TblParaules.IdPista=TblPistes.IdPista \n\
                WHERE TblParaules.IdIdioma="'+ IdIdioma +'";',
            [], function(taula) {Print_Data(Taula = taula.pop());}
            //[], function(taula) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        
        );
  } 
        
        
        
        
        function SQL_TblTextosGUI(IdIdioma,TblTextosGUI){
            Idiomes=TblTextosGUI;
            if(Idiomes.length==0){Idiomes=Idiomes_dft;};
            if(Idiomes.find(Idioma=>Idioma.IdIdioma==IdIdioma)==undefined){
                window.alert("GUI:Idioma no trobat/Idioma no encontrado/Lenguage not found!");
                idiomes=Idiomes_dft;
            }
            
        }
                     
    
    // Print data  
    function Print_Data(res) {
        for (var i in res)
        {
           console.log("row " + i);
           document.getElementById("res").innerHTML += "<br>";
           for (var j in res[i])
             {
              console.log(" " + res[i][j]);
              document.getElementById("res").innerHTML += res[i][j] + ", ";
              window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
             }
        }
    } 

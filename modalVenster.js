window.addEventListener('load',function modale(){
    
    var dive = document.getElementById('modal');
    var img1 = document.getElementById('image1');
    var img2 = document.getElementById('image2');
    var img3 = document.getElementById('image3');
    var diveVens1 = document.createElement('div');
    var diveVens2 = document.createElement('div');
    var diveVens3 = document.createElement('div');
   var page1 = document.createElement('div');
    page1.className = 'page';
    document.body.appendChild(page1);
    var page2 = document.createElement('div');
    page2.className = 'page';
    document.body.appendChild(page2);
    var page3 = document.createElement('div');
    page3.className = 'page';
    document.body.appendChild(page3);
     
      
       var makeKnoop = function() {
           this.creer = function(button){ 
           this.button = button;
           button = document.createElement('button');
           button.className = 'butt';
           document.body.appendChild(button);
           button.addEventListener('click',function sluit(){
            
            dive.style.opacity = '1';
            
            $(diveVens1).animate({
            
           width: 0,
           height: 0
               
       })
            diveVens1.style.display = 'none';
               page1.style.display = 'none';
             
            
        },false);
       }
     }
       
       var makeKnoop2 = function() {
           this.creer = function(button){ 
           this.button = button;
           button = document.createElement('button');
           button.className = 'butt';
           document.body.appendChild(button);
           button.addEventListener('click',function sluit(){
            
            dive.style.opacity = '1';
            
            $(diveVens2).animate({
            
           width: 0,
           height: 0
               
       })
              diveVens2.style.display = 'none';
               page2.style.display = 'none';
        },false);
       }
     }
       
       var makeKnoop3 = function() {
           this.creer = function(button){ 
           this.button = button;
           button = document.createElement('button');
           button.className = 'butt';
           document.body.appendChild(button);
           button.addEventListener('click',function sluit(){
            
            dive.style.opacity = '1';
            
            $(diveVens3).animate({
            
           width: 0,
           height: 0
               
       })
            diveVens3.style.display = 'none';
               page3.style.display = 'none';
            
        },false);
       }
     }
       
       
       
       // diveVens1.style.display = 'block';
        
        
   
    
    img1.addEventListener('click',function venster1(){
        
       dive.style.opacity = '0.6';
       page1.style.display = 'block';
        
         diveVens1.style.position = 'relative';
        diveVens1.style.bottom = '950px';
       diveVens1.style.display = 'block';
       $(diveVens1).animate({
           
           width: 750,
           height: 500
           
       })
        var afbeelding1 = new Image();
        afbeelding1.src = 'image1.jpg';
        afbeelding1.className = 'beeld';
       
        var paragraphe1 = document.createElement('p');
        paragraphe1.className = 'para';
        paragraphe1.textContent = "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.";
        
        diveVens1.className = 'diveVenster';
        
        diveVens1.appendChild(afbeelding1);
        diveVens1.appendChild(paragraphe1);
        document.body.appendChild(diveVens1);
        
        var knoop1 = new makeKnoop();
         knoop1.creer(knoop1);
        
    },false)
    
    
    img2.addEventListener('click',function venster2(){
        
        dive.style.opacity = '0.6';
       page2.style.display = 'block';
        
         diveVens2.style.position = 'relative';
        diveVens2.style.bottom = '950px';
       diveVens2.style.display = 'block';
       $(diveVens2).animate({
           
           width: 750,
           height: 500
           
       })
        var afbeelding2 = new Image();
        afbeelding2.src = 'image2.jpg';
        afbeelding2.className = 'beeld';
        
        var paragraphe2 = document.createElement('p');
        paragraphe2.className = 'para';
        paragraphe2.textContent = "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.";
        
        diveVens2.className = 'diveVenster';
        diveVens2.appendChild(afbeelding2);
        diveVens2.appendChild(paragraphe2);
        document.body.appendChild(diveVens2);
      
         var knoop2 = new makeKnoop2();
        knoop2.creer(knoop2);
        
      
        
    },false)
    
    img3.addEventListener('click',function venster3(){
        
       dive.style.opacity = '0.6';
       page3.style.display = 'block';
        
         diveVens3.style.position = 'relative';
        diveVens3.style.bottom = '950px';
       diveVens3.style.display = 'block';
       $(diveVens3).animate({
           
           width: 750,
           height: 500
           
       })
        var afbeelding3 = new Image();
        afbeelding3.src = 'image3.jpg';
        afbeelding3.className = 'beeld';
        
        var paragraphe3 = document.createElement('p');
        paragraphe3.className = 'para';
        paragraphe3.textContent = "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.";
        
        diveVens3.className = 'diveVenster';
        diveVens3.appendChild(afbeelding3);
        diveVens3.appendChild(paragraphe3);
        document.body.appendChild(diveVens3);
      
      var knoop3 = new makeKnoop3();
        knoop3.creer(knoop3);
        
        
    },false)
    
    page1.addEventListener('click',function close1(){
        
         dive.style.opacity = '1';
       $(diveVens1).animate({
           
           width: 0,
           height: 0
           
       })
       diveVens1.style.display = 'none';
        page1.style.display = 'none';
        /*document.location.reload();*/
    },false)
    
    page2.addEventListener('click',function close2(){
        
         dive.style.opacity = '1';
       $(diveVens2).animate({
           
           width: 0,
           height: 0
           
       })
       diveVens2.style.display = 'none';
        page2.style.display = 'none';
        /*document.location.reload();*/
    },false)
    
    page3.addEventListener('click',function close3(){
        
         dive.style.opacity = '1';
       $(diveVens3).animate({
           
           width: 0,
           height: 0
           
       })
       diveVens3.style.display = 'none';
        page3.style.display = 'none';
        /*document.location.reload();*/
    },false)
    
    
},false)